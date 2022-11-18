import { apiUrl } from './../models/config';
import { SocketService } from './../services/socket-service.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  private socket: any;
  // category = 'all foods';
  category = 'all foods';
  filters = ['all foods'];
  isShow = false;
  searchTerm = '';

  constructor(
    private router: Router,
    private socketService: SocketService,
    private http: HttpClient,
    private firestore: AngularFirestore
  ) {
    this.socket = io(apiUrl);
  }

  foodArray: any;
  closingTime: string = '';
  currentTime: string = '';
  public orderStatus: boolean = false;
  breakTime: { closingTime: string; openingTime: string } = {
    closingTime: '',
    openingTime: '',
  };
  closingTimeError = false;
  subscription: Subscription = new Subscription();
  momoErrorMessage = '';
  momoError = false;
  day = new Date().getDay();

  ngOnInit(): void {
    this.http.get(apiUrl).subscribe((res: any) => {
      this.orderStatus = res.orderStatus;
      if (this.orderStatus || this.day === 0) {
        this.closingTimeError = true;
      } else {
        this.closingTimeError = false;
      }
    });

    this.socket.on('orderStatus', (res: { orderStatus: boolean }) => {
      this.orderStatus = res.orderStatus;
      if (res.orderStatus) {
        this.closingTimeError = true;
      } else {
        this.closingTimeError = false;
      }
    });

    this.filters.push(
      ...this.socketService
        .onGetCategories()
        .filter((item: any) => item !== 'extras')
    );

    this.foodArray = this.socketService.getFoodByCategory(this.category);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollPosition >= 800) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  onProceedToOrderPage(id: number): void {
    if (this.orderStatus || this.day === 0) {
      this.closingTimeError = true;
    } else {
      this.closingTimeError = false;
      this.router.navigate(['/orders', id]);
    }
  }

  onSelectFilter(item: string) {
    this.category = item;
    this.searchTerm = '';
    this.foodArray = this.socketService.getFoodByCategory(item);
  }

  onSearchFood(searchTerm: any) {
    this.foodArray = this.socketService.onSearchFood(
      searchTerm.toLocaleLowerCase(),
      this.category
    );
  }
}
