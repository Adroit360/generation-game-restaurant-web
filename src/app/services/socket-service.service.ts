import { Injectable } from '@angular/core';
import { Food } from '../models/interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  orderStatusEvent: Subject<boolean> = new Subject<boolean>();
  constructor() {}
  closingTime: string = '19:00:00';
  openingTime = '07:00:00';
  foodArray: Food[] = [
    {
      id: '33cc84aebc4b49b9bdc181782680c493',
      body: 'Chicken Soup',
      image: '../../assets/beans and egg.jpg',
      alt: 'Chicken Soup',
      price: '40.00',
      category: 'soup',
    },
    {
      id: '3646754e10574da3a16a90e2ecff5e06',
      body: 'Goat Soup',
      image: '../../assets/closePackage.jpg',
      alt: 'Goat Soup',
      price: '40.00',
      category: 'soup',
    },
    {
      id: '4226d4f1e91e404880345bc18be88e5b',
      body: 'Hot pepper soup with goat meat',
      image: '../../assets/closePackage.jpg',
      alt: 'Hot pepper soup with goat meat',
      price: '45.00',
      category: 'soup',
    },
    {
      id: 'ab62ad68aff443afa4c827a78a22e3a3',
      body: 'Full Tilapia Soup',
      image: '../../assets/BeansWithEggAndChicken.jpg',
      alt: 'Full Tilapia Soup',
      price: '55.00',
      category: 'soup',
    },
    {
      id: '6fe15e03186f478b8c2399ae70a51960',
      body: 'Fish soup',
      image: '../../assets/RiceWithPlantainAndEgg.jpg',
      alt: 'Fish soup',
      price: '40.00',
      category: 'soup',
    },
    {
      id: 'c4d3ddc886c540149323387915598847',
      body: 'Fufu with fish soup',
      image: '../../assets/BeansWithEggAndChicken.jpg',
      alt: 'Fufu with fish soup',
      price: '45.00',
      category: 'fufu',
    },
    {
      id: 'ddbf19c31b9c4844865bf59fbb8fc985',
      body: 'Fufu with chicken soup',
      image: '../../assets/closePackage.jpg',
      alt: 'Fufu with chicken soup',
      price: '45.00',
      category: 'fufu',
    },
    {
      id: '4d2da93389ce48aa8841c56891494942',
      body: 'Rice with chicken soup',
      image: '../../assets/riceWithFishAndEgg.jpg',
      alt: 'Rice with chicken soup',
      price: '45.00',
      category: 'rice',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf86',
      body: 'Rice with fish soup',
      image: '../../assets/closePackage.jpg',
      alt: 'Rice with fish soup',
      price: '45.00',
      category: 'rice',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf86',
      body: 'Rice with goat soup',
      image: '../../assets/closePackage.jpg',
      alt: 'Rice with goat soup',
      price: '47.00',
      category: 'rice',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf93',
      body: 'Fufu with goat soup',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/9d7add1feb2c4db1b0f73dc7fff65a6c.jpeg',
      alt: 'Fufu with goat soup',
      price: '47.00',
      category: 'fufu',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf94',
      body: 'Banku with okro and fish',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/739162e260634fecb0778d90df445c66.jpeg',
      alt: 'Banku with okro and fish',
      price: '45.00',
      category: 'banku',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf95',
      body: 'Banku with okro and chicken',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/2160423773ec4c1a836543a6f3dab9b2.jpeg',
      alt: 'Banku with okro and chicken',
      price: '45.00',
      category: 'banku',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf87',
      body: 'Eba with okro and chicken',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/b18a3b04a8894f24aa8237b0c1ee425c.jpeg',
      alt: 'Eba with okro and chicken',
      price: '45.00',
      category: 'banku',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf88',
      body: 'Eba with okro and fish',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/16e9f7331bbe4e4f96600300b2e5a165.jpeg',
      alt: 'Eba with okro and fish',
      price: '45.00',
      category: 'banku',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf89',
      body: 'Eba with okro and goat meat',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/58701df60c924014addee65c8a71f055.jpeg',
      alt: 'Eba with okro and goat meat',
      price: '49.00',
      category: 'banku',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf90',
      body: 'Banku with okro and goat meat',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/58701df60c924014addee65c8a71f055.jpeg',
      alt: 'Banku with okro and goat meat',
      price: '49.00',
      category: 'banku',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf91',
      body: 'Banku with okro special',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/e5cda0f1e59b41caad09b73e0a25b19b.jpeg',
      alt: 'Banku with okro special',
      price: '55.00',
      category: 'banku',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf92',
      body: 'Banku with hot pepper and chicken',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/c1770f9226fc4cc6a7e456155d6b5aad.jpeg',
      alt: 'Banku with hot pepper and chicken',
      price: '45.00',
      category: 'banku',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf96',
      body: 'Banku with hot pepper and fish',
      image: '../../assets/Banku-Fish-1.jpeg',
      alt: 'Banku with hot pepper and fish',
      price: '47.00',
      category: 'banku',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf97',
      body: 'Banku with hot pepper and goat meat',
      image: '../../assets/Banku-Fish-1.jpeg',
      alt: 'Banku with hot pepper and goat meat',
      price: '47.00',
      category: 'banku',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf101',
      body: 'Extra Meat/Goat',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/4ba78244b5af46af8cb509f0194d8830.jpeg',
      alt: 'Extra Meat/Goat',
      price: '18.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf102',
      body: 'Extra fufu',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/ae9b1e9d51b34dd5b7d89916dfc7615d.jpeg',
      alt: 'Extra fufu',
      price: '6.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf103',
      body: 'More plantain fufu(Extra)',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/281b3d9e91dc48c88eeea96fe7590f12.jpeg',
      alt: 'More plantain fufu(Extra)',
      price: '6.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf98',
      body: 'Extra Banku',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/d286e5c8ba964d3c8d28ec7068fd1485.jpeg',
      alt: 'Extra Banku',
      price: '4.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf99',
      body: 'Jollof with chicken stew',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/5d0d109937014f97a235e76d2f91f765.jpeg',
      alt: 'Jollof with chicken stew',
      price: '45.00',
      category: 'rice',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf100',
      body: 'Jollof with fish stew',
      image:
        'https://d1bycbsuiqd0qu.cloudfront.net/200x200/images/cca744abd84b442898562e5adf414cb9.jpeg',
      alt: 'Jollof with fish stew',
      price: '45.00',
      category: 'rice',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf200',
      body: 'Plain rice with fish stew',
      image: '../../assets/fufu.jpeg',
      alt: 'Plain rice with fish stew',
      price: '45.00',
      category: 'rice',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf201',
      body: 'Plain rice with chicken stew',
      image: '../../assets/fufu.jpeg',
      alt: 'Plain rice with chicken stew',
      price: '45.00',
      category: 'rice',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf202',
      body: 'Plain rice with goat stew',
      image: '../../assets/fufu.jpeg',
      alt: 'Plain rice with goat stew',
      price: '51.00',
      category: 'rice',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf202',
      body: 'Jollof rice with goat stew',
      image: '../../assets/fufulebene.jpg',
      alt: 'Jollof rice with goat stew',
      price: '51.00',
      category: 'rice',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf203',
      body: 'Extra plain rice',
      image: '../../assets/fufulebene.jpg',
      alt: 'Extra plain rice',
      price: '17.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf204',
      body: 'Extra fried rice',
      image: '../../assets/fufulebene.jpg',
      alt: 'Extra fried rice',
      price: '17.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf203',
      body: 'Extra jollof rice',
      image: '../../assets/fufulebene.jpg',
      alt: 'Extra jollof rice',
      price: '17.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf204',
      body: 'Extra pepper/ketchup',
      image: '../../assets/fufulebene.jpg',
      alt: 'Extra pepper/ketchup',
      price: '1.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf205',
      body: 'Extra coleslaw/gravy',
      image: '../../assets/fufulebene.jpg',
      alt: 'Extra coleslaw/gravy',
      price: '2.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf206',
      body: 'Banku with grilled tilapia(full)',
      image: '../../assets/fufulebene.jpg',
      alt: 'Banku with grilled tilapia(full)',
      price: '51.00',
      category: 'tilapia',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf207',
      body: 'Banku with fried tilapia(full)',
      image: '../../assets/fufulebene.jpg',
      alt: 'Banku with fried tilapia(full)',
      price: '51.00',
      category: 'tilapia',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf500',
      body: 'Banku with fried tilapia(half)',
      image: '../../assets/fufulebene.jpg',
      alt: 'Banku with fried tilapia(half)',
      price: '43.00',
      category: 'tilapia',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf501',
      body: 'Banku with grilled tilapia(half)',
      image: '../../assets/fufulebene.jpg',
      alt: 'Banku with grilled tilapia(half)',
      price: '43.00',
      category: 'tilapia',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf502',
      body: 'Banku with tilapia Soup(half)',
      image: '../../assets/fufulebene.jpg',
      alt: 'Banku with tilapia Soup(half)',
      price: '47.00',
      category: 'tilapia',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf503',
      body: 'Banku with tilapia Soup(full)',
      image: '../../assets/fufulebene.jpg',
      alt: 'Banku with tilapia Soup(full)',
      price: '47.00',
      category: 'tilapia',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf504',
      body: 'Fried rice with grilled chicken',
      image: '../../assets/fufulebene.jpg',
      alt: 'Fried rice with grilled chicken',
      price: '45.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf505',
      body: 'Fried rice with grilled chicken',
      image: '../../assets/fufulebene.jpg',
      alt: 'Fried rice with grilled chicken',
      price: '45.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf506',
      body: 'Jollof rice with grilled chicken',
      image: '../../assets/fufulebene.jpg',
      alt: 'Jollof rice with grilled chicken',
      price: '45.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf507',
      body: 'Jollof rice with grilled chicken and whole fish',
      image: '../../assets/fufulebene.jpg',
      alt: 'Jollof rice with grilled chicken and whole fish',
      price: '47.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf508',
      body: 'Fried rice with grilled chicken and whole fish',
      image: '../../assets/fufulebene.jpg',
      alt: 'Fried rice with grilled chicken and whole fish',
      price: '47.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf509',
      body: 'Chicken and yam chips',
      image: '../../assets/fufulebene.jpg',
      alt: 'Chicken and yam chips',
      price: '47.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf510',
      body: 'Chicken and chips',
      image: '../../assets/fufulebene.jpg',
      alt: 'Chicken and chips',
      price: '47.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf511',
      body: 'Fish and yam chips',
      image: '../../assets/fufulebene.jpg',
      alt: 'Fish and yam chips',
      price: '48.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf512',
      body: 'Fish and  chips',
      image: '../../assets/fufulebene.jpg',
      alt: 'Fish and  chips',
      price: '48.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf513',
      body: 'Fried Boneless fish with fried rice',
      image: '../../assets/fufulebene.jpg',
      alt: 'Fried Boneless fish with fried rice',
      price: '60.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf514',
      body: 'Fried Boneless fish with chips',
      image: '../../assets/fufulebene.jpg',
      alt: 'Fried Boneless fish with chips',
      price: '60.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf515',
      body: 'Rice with chicken wings',
      image: '../../assets/fufulebene.jpg',
      alt: 'Rice with chicken wings',
      price: '47.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf516',
      body: 'chips only',
      image: '../../assets/fufulebene.jpg',
      alt: 'chips only',
      price: '19.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf517',
      body: 'quarter chicken',
      image: '../../assets/fufulebene.jpg',
      alt: 'quarter chicken',
      price: '30.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf518',
      body: 'Fish only',
      image: '../../assets/fufulebene.jpg',
      alt: 'Fish only',
      price: '33.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf519',
      body: 'Goat only',
      image: '../../assets/fufulebene.jpg',
      alt: 'Goat only',
      price: '45.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf520',
      body: 'Generation spicy chicken',
      image: '../../assets/fufulebene.jpg',
      alt: 'Generation spicy chicken',
      price: '35.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf521',
      body: 'Fried rice with goat',
      image: '../../assets/fufulebene.jpg',
      alt: 'Fried rice with goat',
      price: '51.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf522',
      body: 'chips with goat',
      image: '../../assets/fufulebene.jpg',
      alt: 'chips with goat',
      price: '55.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf523',
      body: 'side salad or coleslaw',
      image: '../../assets/fufulebene.jpg',
      alt: 'side salad or coleslaw',
      price: '22.00',
      category: 'salad',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf524',
      body: 'mixed salad',
      image: '../../assets/fufulebene.jpg',
      alt: 'mixed salad',
      price: '40.00',
      category: 'salad',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf525',
      body: 'Tuna Salad',
      image: '../../assets/fufulebene.jpg',
      alt: 'Tuna Salad',
      price: '40.00',
      category: 'salad',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf526',
      body: 'Fish salad',
      image: '../../assets/fufulebene.jpg',
      alt: 'Fish salad',
      price: '47.00',
      category: 'salad',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf527',
      body: 'Generation Game special salad',
      image: '../../assets/fufulebene.jpg',
      alt: 'Generation Game special salad',
      price: '47.00',
      category: 'salad',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf528',
      body: 'vegetable salad',
      image: '../../assets/fufulebene.jpg',
      alt: 'vegetable salad',
      price: '30.00',
      category: 'vegetarian',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf529',
      body: 'vegetables sauce with rice',
      image: '../../assets/fufulebene.jpg',
      alt: 'vegetables sauce with rice',
      price: '40.00',
      category: 'vegetarian',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf530',
      body: 'vegetables sauce with chips',
      image: '../../assets/fufulebene.jpg',
      alt: 'vegetables sauce with chips',
      price: '42.00',
      category: 'vegetarian',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf531',
      body: 'vegetables sauce with noodles',
      image: '../../assets/fufulebene.jpg',
      alt: 'vegetables sauce with noodles',
      price: '40.00',
      category: 'vegetarian',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf532',
      body: 'Assorted Rice',
      image: '../../assets/fufulebene.jpg',
      alt: 'Assorted Rice',
      price: '47.00',
      category: 'rice',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf533',
      body: 'Assorted Jollof',
      image: '../../assets/fufulebene.jpg',
      alt: 'Assorted Jollof',
      price: '50.00',
      category: 'rice',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf534',
      body: 'Indomie with vegetables',
      image: '../../assets/fufulebene.jpg',
      alt: 'Indomie with vegetables',
      price: '40.00',
      category: 'spaghetti',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf535',
      body: 'Indomie with chicken',
      image: '../../assets/fufulebene.jpg',
      alt: 'Indomie with chicken',
      price: '47.00',
      category: 'spaghetti',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf536',
      body: 'Indomie with fish',
      image: '../../assets/fufulebene.jpg',
      alt: 'Indomie with fish',
      price: '49.00',
      category: 'spaghetti',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf537',
      body: 'Indomie with goat meat',
      image: '../../assets/fufulebene.jpg',
      alt: 'Indomie with goat meat',
      price: '51.00',
      category: 'spaghetti',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf538',
      body: 'Indomie with goat meat',
      image: '../../assets/fufulebene.jpg',
      alt: 'Indomie with goat meat',
      price: '51.00',
      category: 'spaghetti',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf539',
      body: 'Spaghetti with meat sauce',
      image: '../../assets/fufulebene.jpg',
      alt: 'Spaghetti with meat sauce',
      price: '50.00',
      category: 'spaghetti',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf540',
      body: 'Diced chicken with vegetables',
      image: '../../assets/fufulebene.jpg',
      alt: 'Diced chicken with vegetables',
      price: '50.00',
      category: 'chinese',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf541',
      body: 'Shredded beef with onions and green pepper',
      image: '../../assets/fufulebene.jpg',
      alt: 'Shredded beef with onions and green pepper',
      price: '52.00',
      category: 'chinese',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf542',
      body: 'Shredded beef with chinese vegetables',
      image: '../../assets/fufulebene.jpg',
      alt: 'Shredded beef with chinese vegetables',
      price: '57.00',
      category: 'chinese',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf543',
      body: 'Diced fish with vegetables',
      image: '../../assets/fufulebene.jpg',
      alt: 'Diced fish with vegetables',
      price: '60.00',
      category: 'chinese',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf544',
      body: 'Chicken sauce only',
      image: '../../assets/fufulebene.jpg',
      alt: 'Chicken sauce only',
      price: '45.00',
      category: 'chinese',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf545',
      body: 'Beef sauce only',
      image: '../../assets/fufulebene.jpg',
      alt: 'Beef sauce only',
      price: '45.00',
      category: 'chinese',
    },
  ];

  getFoodByID(id: string): Food {
    return this.foodArray.filter((item) => item.id === id)[0];
  }

  getAllFoods(): Food[] {
    return this.foodArray;
  }

  getFoodByCategory(category: string): Food[] {
    if (category === 'all foods') {
      return this.foodArray.filter((food) => food.category !== 'extras');
    }
    return this.foodArray.filter((food) => food.category === category);
  }

  getClosingTime(): { closingTime: string; openingTime: string } {
    return { closingTime: this.closingTime, openingTime: this.openingTime };
  }
}
