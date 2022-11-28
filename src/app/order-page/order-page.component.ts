import { OrderDetails } from './../models/interface';
import { SocketService } from './../services/socket-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { io } from 'socket.io-client';
import { PaymentResponse, Order, Food } from '../models/interface';
import { v4 as uuidv4 } from 'uuid';
import { cities } from '../models/accra';
import { DomSanitizer } from '@angular/platform-browser';
import { apiUrl } from '../models/config';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnInit {
  addAnotherItemModal: boolean = false;
  foodsOrdered: {
    id: string;
    foodName: string;
    quantity: number;
    price: number;
  }[] = [];
  foodArray: any;
  loading = false;
  isValidLocationOrPacks = false;
  momoErrorMessage$: Observable<any>;
  momoErrorMessage = '';
  momoError = false;
  payStackUrl: any;
  payStackModal = false;
  errorMessage = '';
  category = 'local dishes';
  filters: string[] = [];
  searchTerm = '';
  showLocation = true;

  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private http: HttpClient,
    private socketService: SocketService,
    private route: ActivatedRoute,
    public domSanitizer: DomSanitizer
  ) {
    this.socket = io(apiUrl);
    this.foodArray = this.socketService.getAllFoods();
    this.momoErrorMessage$ = this.firestore
      .collection('messages')
      .valueChanges();
    this.momoErrorMessage$.subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (
          res[i].type === 'momo-error' &&
          res[i].message !== '' &&
          res[i].message !== null
        ) {
          this.momoErrorMessage = res[i].message;
          this.momoError = true;
        }
      }
    });
  }

  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+233\d{9}|^233\d{9}|^\d{10}$/),
    ]),
    location: new FormControl('', Validators.required),
    // deliveryFee: new FormControl(''),
    // amount: new FormControl(0, Validators.required),
    deliveryType: new FormControl('dispatch-rider', Validators.required),
    numberOfPacks: new FormControl('', Validators.required),
    note: new FormControl(''),
    foodOrdered: new FormControl('', Validators.required),
    robot: new FormControl(''),
  });

  orderDetails: any;

  private socket: any;
  public data: any;
  modalOpen = false;

  url = `${apiUrl}/paystack/payment`;

  paymentError = false;
  paymentSuccess = false;
  submitted = false;
  error = 'Payment was not successful. Please try again';
  success = 'Successfully processed transaction.';
  paymentLoading = false;
  paymentReason = 'Processing payment...';
  price = '';
  locations: { name: string; price: number }[] = cities;
  invalidLocation = false;
  priceOfFood = '';
  deliveryFee = 0;
  totalPrice = 0;
  clientTransactionId = '';
  deliveryType = 'dispatch-rider';

  ngOnInit(): void {
    window.scroll(0, 0);
    this.route.paramMap.subscribe((params) => {
      const id: any = params.get('id');
      const data: Food = this.socketService.getFoodByID(id);
      this.price = data.price;
      this.priceOfFood = data.price;
      this.orderForm.patchValue({
        amount: data.price,
        // amount: '0.01',
        foodOrdered: data.body,
      });
      this.foodsOrdered.push({
        id,
        foodName: data.body,
        quantity: 1,
        price: +data.price,
      });
      this.totalPrice = this.getTotalPrice(this.deliveryFee, this.priceOfFood);
    });

    this.filters.push(...this.socketService.onGetCategories());

    this.socket.on('notification', (res: any) => {
      this.data = res.data;
      // console.log(this.data);
      if (this.clientTransactionId === this.data.clienttransid) {
        this.paymentReason = 'Processing payment...';

        if (this.data.status === 'FAILED') {
          this.paymentError = true;
          // this.paymentSuccess = false;
          this.paymentLoading = false;
          setTimeout(() => {
            this.paymentError = false;
          }, 30000);
        } else if (this.data.status === 'PAID') {
          this.paymentError = false;
          // this.paymentSuccess = true;
          this.paymentLoading = false;
          // this.postDetailsToFireBase(this.orderDetails);
          setTimeout(() => {
            // this.paymentSuccess = false;
            this.modalOpen = true;
          }, 500);
        }
      }
    });
  }

  async postDetailsToFireBase(data: OrderDetails): Promise<void> {
    try {
      await this.createOrder(data);
    } catch (error) {
      console.log(error);
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.orderForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    const uuid = uuidv4().split('-').slice(0, 2).join('');
    this.clientTransactionId = uuid;

    this.foodsOrdered.forEach((food) => {
      if (!food.quantity) {
        this.isValidLocationOrPacks = true;
        this.errorMessage = 'Please add a number of packs to the food';
      }
    });

    if (this.orderForm.value.robot) {
      return;
    }

    if (
      (this.invalidLocation || this.f['location'].errors) &&
      this.showLocation
    ) {
      this.isValidLocationOrPacks = true;
      this.errorMessage = 'Please select a valid location';
      return;
    }

    if ((this.orderForm.invalid || this.invalidLocation) && this.showLocation) {
      window.scroll(0, 0);
      return;
    }

    // set the orderDetails
    this.orderDetails = {
      date: Date.now().toString(),
      orderId: this.clientTransactionId,
      name: this.orderForm.value.name,
      foodOrdered: this.foodsOrdered.map((food) => food.foodName),
      phoneNumber: this.orderForm.value.phoneNumber,
      amount: this.totalPrice,
      note: this.orderForm.value.note,
      completed: false,
      location:
        this.orderForm.value.deliveryType === 'pick-up'
          ? 'Pick Up'
          : this.orderForm.value.location,
      deliveryType: this.orderForm.value.deliveryType,
      deliveryFee:
        this.orderForm.value.deliveryType === 'pick-up' ? 0 : this.deliveryFee,
      priceOfFood: this.priceOfFood,
      orderPaid: false,
      numberOfPacks: this.foodsOrdered.map((food) => ({
        [food.foodName]: food.quantity,
      })),
    };

    let valError = this.validateOrder(this.orderDetails);
    if (valError) {
      this.isValidLocationOrPacks = true;
      this.errorMessage = valError;
      this.orderForm.setErrors({ invalid: true });
      return;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.loading = true;
    const body = {
      //amount: this.totalPrice * 100,
      amount: 0.03 * 100,
      clientId: this.clientTransactionId,
      orderDetails: this.orderDetails,
    };
    this.http.post<PaymentResponse>(this.url, body, httpOptions).subscribe(
      (res: any) => {
        this.paymentLoading = false;
        if (res.error) {
          this.paymentError = true;
        }
        this.payStackUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
          res.auth_url
        );
        this.payStackModal = true;
      },
      (error) => {
        this.paymentError = true;
        this.loading = false;
      }
    );
  }

  validateOrder(orderDetails: OrderDetails) {
    if (orderDetails.foodOrdered.length == 0) {
      return 'Please select at least one food item';
    }
    let invalidNumberOfPacks = Object.keys(orderDetails.numberOfPacks).filter(
      (i) => !orderDetails.numberOfPacks[i]
    );
    if (invalidNumberOfPacks.length > 0) {
      return 'Please select the number of packs for each food item';
    }
    return false;
  }

  createOrder(data: OrderDetails) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('orders')
        .add(data)
        .then(
          (res) => {
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }

  getPhoneNetWork(phoneNumber: string): string | null {
    let networkDeterminants = phoneNumber.substring(2, 3);
    if (
      networkDeterminants == '4' ||
      networkDeterminants == '5' ||
      networkDeterminants == '9'
    )
      return 'MTN';
    else if (networkDeterminants == '0') return 'VODAFONE';
    else if (networkDeterminants == '6' || networkDeterminants == '7')
      return 'AIRTELTIGO';

    return null;
  }

  FormatGhanaianPhoneNumber = (phoneNumber: string) => {
    if (phoneNumber.startsWith('0') && phoneNumber.length == 10) {
      return '233' + phoneNumber.substring(1);
    } else if (!phoneNumber.startsWith('0') && phoneNumber.length == 9) {
      return '233' + phoneNumber;
    } else if (phoneNumber.startsWith('233') && phoneNumber.length == 12) {
      return phoneNumber;
    } else if (phoneNumber.startsWith('+233') && phoneNumber.length == 13) {
      return phoneNumber.substring(1);
    }

    return phoneNumber;
  };

  onClose(): void {
    this.paymentError = false;
    this.loading = false;
    // this.paymentSuccess = false;
  }

  calculateAmount(event: any) {
    let foodsPrice = 0;
    this.foodsOrdered.forEach((food) => {
      foodsPrice += Number(food.price * +food.quantity);
    });
    this.priceOfFood = foodsPrice.toFixed(2);

    this.totalPrice = this.getTotalPrice(this.deliveryFee, this.priceOfFood);

    return;
  }

  onCalculateFee(event: any): void {
    const selectedLocation = event.target.value;
    const city: { name: string; price: number } | undefined =
      this.locations.find((item) => item.name === selectedLocation);
    if (!city) {
      this.invalidLocation = true;
      // this.orderForm.patchValue({
      //   deliveryFee: '',
      // });
      this.deliveryFee = 0;
      this.totalPrice = this.getTotalPrice(this.deliveryFee, this.priceOfFood);
    } else {
      this.invalidLocation = false;
      // this.orderForm.patchValue({
      //   deliveryFee: city.price.toFixed(2),
      // });
      this.deliveryFee = city.price;
      this.totalPrice = this.getTotalPrice(this.deliveryFee, this.priceOfFood);
    }
  }

  getTotalPrice(deliveryFee: number, priceOfFood: string): number {
    return deliveryFee + parseInt(priceOfFood);
    // return 0.01;
  }
  // onCloseModal(): void {
  //   this.modalOpen = false;
  //   this.router.navigate(['/']);
  // }
  onCloseModal(): void {
    this.payStackModal = false;
    this.router.navigate(['/']);
  }

  addAnotherItem() {
    let foodOrderedIds = this.foodsOrdered.map((i) => i.id);
    this.foodArray = this.socketService
      .getAllFoods()
      .filter(
        (i) => !foodOrderedIds.includes(i.id) && i.category === this.category
      );
    this.addAnotherItemModal = true;
  }

  closeAddAnotherItemModal() {
    this.addAnotherItemModal = false;
  }

  addFood(id: string): void {
    const data: Food = this.socketService.getFoodByID(id);
    this.foodsOrdered.push({
      id,
      foodName: data.body,
      quantity: 1,
      price: +data.price,
    });

    this.priceOfFood = this.foodsOrdered
      .reduce(function (sum, food) {
        const updatedSum = sum + food.price;
        return updatedSum;
      }, 0)
      .toFixed(2);

    this.totalPrice = this.getTotalPrice(this.deliveryFee, this.priceOfFood);

    this.closeAddAnotherItemModal();
  }

  removeFood(id: string): void {
    this.foodsOrdered = this.foodsOrdered.filter((item) => item.id !== id);
    this.priceOfFood = this.foodsOrdered
      .reduce(function (sum, food) {
        const updatedSum = sum + food.price * food.quantity;
        return updatedSum;
      }, 0)
      .toFixed(2);

    this.totalPrice = this.getTotalPrice(this.deliveryFee, this.priceOfFood);
  }

  onCloseLocationModal() {
    window.scroll(0, 0);
    this.isValidLocationOrPacks = false;
  }

  onSelectFilter(item: string) {
    this.category = item;
    let foodOrderedIds = this.foodsOrdered.map((i) => i.id);
    this.foodArray = this.socketService
      .getAllFoods()
      .filter((i) => !foodOrderedIds.includes(i.id) && i.category === item);
    this.searchTerm = '';
  }
  onSearchFood(searchTerm: any) {
    this.foodArray = this.socketService.onSearchFood(
      searchTerm.toLocaleLowerCase(),
      this.category
    );
  }
  onDeliveryTypeChange(event: any) {
    if (event.target.value === 'pick-up') {
      this.showLocation = false;
      this.deliveryFee = 0;
      this.calculateAmount(event);
    } else {
      this.showLocation = true;
      if (this.orderForm.value.location) {
        this.onCalculateFee(this.orderForm.value.location);
      }
    }
  }
}
