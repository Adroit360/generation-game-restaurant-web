import { Injectable } from '@angular/core';
import { Food } from '../models/interface';
import { Observable, Subject } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  orderStatusEvent: Subject<boolean> = new Subject<boolean>();
  constructor() {}
  closingTime: string = '19:00:00';
  openingTime = '07:00:00';
  categories: string[] = [];
  foodArray: Food[] = [
    {
      id: '33cc84aebc4b49b9bdc181782680c493',
      body: 'Chicken Soup',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaOmXg9WZAYU78VYrHyfQHWP2QiX0ehncTA&usqp=CAU',
      alt: 'Chicken Soup',
      price: '40.00',
      category: 'local dishes',
    },
    {
      id: '3646754e10574da3a16a90e2ecff5e06',
      body: 'Goat Soup',
      image:
        'https://agameals.com/wp-content/uploads/2021/12/Goat-Meat-Peppersoup-Wazobia-African-Market-1.jpg',
      alt: 'Goat Soup',
      price: '40.00',
      category: 'local dishes',
    },
    {
      id: '4226d4f1e91e404880345bc18be88e5b',
      body: 'Hot pepper soup with goat meat',
      image:
        'https://www.thefoodihouse.com/wp-content/uploads/2020/05/IMG_3167-1920x1440.jpg',
      alt: 'Hot pepper soup with goat meat',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: 'ab62ad68aff443afa4c827a78a22e3a3',
      body: 'Full Tilapia Soup',
      image:
        'https://www.nairaland.com/attachments/11232055_maxresdefault_jpega7a20d23424d1f4e3dd0c48c741188d6',
      alt: 'Full Tilapia Soup',
      price: '55.00',
      category: 'local dishes',
    },
    {
      id: '6fe15e03186f478b8c2399ae70a51960',
      body: 'Fish soup',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9R6-k1NEz-37TPjZp7DHIKF8A3exjTKWd4w&usqp=CAU',
      alt: 'Fish soup',
      price: '40.00',
      category: 'local dishes',
    },
    {
      id: 'c4d3ddc886c540149323387915598847',
      body: 'Fufu with fish soup',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Fufu-red-fish%20Background%20Removed.png?alt=media&token=9a1427f8-92d4-47f2-8002-93c93bacf9f0',
      alt: 'Fufu with fish soup',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: 'ddbf19c31b9c4844865bf59fbb8fc985',
      body: 'Fufu with chicken soup',
      image:
        'https://tse4.mm.bing.net/th?id=OIP.lsvIkHKx74TmIEWrQpHD4AHaHa&pid=Api&P=0',
      alt: 'Fufu with chicken soup',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: '4d2da93389ce48aa8841c56891494942',
      body: 'Rice with chicken soup',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTgx1D_2NS1C8OmO7oVrLNn552fbtE77j2pJpk7JETFn84Q0U5x2y5vxHh0H4PMPZdyo&usqp=CAU',
      alt: 'Rice with chicken soup',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf86',
      body: 'Rice with fish soup',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTgx1D_2NS1C8OmO7oVrLNn552fbtE77j2pJpk7JETFn84Q0U5x2y5vxHh0H4PMPZdyo&usqp=CAU',
      alt: 'Rice with fish soup',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf86',
      body: 'Rice with goat soup',
      image:
        'https://img-global.cpcdn.com/recipes/edd777cf74699066/751x532cq70/goat-offals-pepper-soup-and-white-rice-recipe-main-photo.jpg',
      alt: 'Rice with goat soup',
      price: '47.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf93',
      body: 'Fufu with goat soup',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMNSkImqcDiWHT6kncDc_FTn32Wa8rSAGMKfaqVeNGQs1Pg8Z6Z6BlpEDr11vWphvJhs&usqp=CAU',
      alt: 'Fufu with goat soup',
      price: '47.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf94',
      body: 'Banku with okro and fish',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-NzvttFXgLNnfD3FZ0eFMsmTK2-zcczSew&usqp=CAU',
      alt: 'Banku with okro and fish',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf95',
      body: 'Banku with okro and chicken',
      image: 'https://i.ytimg.com/vi/4JmAjO7uYyA/maxresdefault.jpg',
      alt: 'Banku with okro and chicken',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf87',
      body: 'Eba with okro and chicken',
      image:
        'https://elaagroexport.com.ng/wp-content/uploads/2020/04/okra-soup-300x262.jpg',
      alt: 'Eba with okro and chicken',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf88',
      body: 'Eba with okro and fish',
      image: 'https://pbs.twimg.com/media/DamTY6vX0AAItv0.jpg',
      alt: 'Eba with okro and fish',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf89',
      body: 'Eba with okro and goat meat',
      image:
        'https://tse4.mm.bing.net/th?id=OIP.MuPwLD9BWcfWfhU5-Hg-pQHaHa&pid=Api&P=0',
      alt: 'Eba with okro and goat meat',
      price: '49.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf90',
      body: 'Banku with okro and goat meat',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Banku-okro-special.jpeg?alt=media&token=a4d27a79-ba1c-4d08-a2e3-f1ae6058b68a',
      alt: 'Banku with okro and goat meat',
      price: '49.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf91',
      body: 'Banku with okro special',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Banku-okro-special.jpeg?alt=media&token=a4d27a79-ba1c-4d08-a2e3-f1ae6058b68a',
      alt: 'Banku with okro special',
      price: '55.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf92',
      body: 'Banku with hot pepper and chicken',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/banku%20with%20pepeer%20and%20chicken.jpeg?alt=media&token=40a2489e-a8c8-4d58-b476-cdc4314b8fb6',
      alt: 'Banku with hot pepper and chicken',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf96',
      body: 'Banku with hot pepper and fish',
      image:
        'https://9jafoods.com/wp-content/uploads/2020/08/Banku-with-Fried-Fish.jpg',
      alt: 'Banku with hot pepper and fish',
      price: '47.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf97',
      body: 'Banku with hot pepper and goat meat',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BTIkJWaBTCb5HOTyeoX6zBQI0Fb3Xyhufw&usqp=CAU',
      alt: 'Banku with hot pepper and goat meat',
      price: '47.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf101',
      body: 'Extra Meat',
      image:
        'https://www.seriouseats.com/thmb/QOgvX7JwaI8kCCL-DlPRqjGAbbk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__01__20190916-wok-skills-Dry-Fry-51-4212d920d4804c349fdc852128ce05cc.jpg',
      alt: 'Extra Meat',
      price: '18.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf700',
      body: 'Extra Goat',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/extra%20goat%20meat.jpeg?alt=media&token=4366ebf3-80f2-416b-afa9-16eba06b28e3',
      alt: 'Extra Goat',
      price: '18.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf102',
      body: 'Extra fufu',
      image:
        'https://res.cloudinary.com/hsxfx8igq/image/upload/t_4x3_recipe_image,f_auto/v1597654696/Fufu_qzygbr.jpg',
      alt: 'Extra fufu',
      price: '6.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf103',
      body: 'More plantain fufu(Extra)',
      image:
        'https://res.cloudinary.com/hsxfx8igq/image/upload/t_4x3_recipe_image,f_auto/v1597654696/Fufu_qzygbr.jpg',
      alt: 'More plantain fufu(Extra)',
      price: '6.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf98',
      body: 'Extra Banku',
      image:
        'https://loozap.com/storage/files/gh/jil_05-09-2020/thumb-816x460-listings360_jphsr02__7967633_0ebad864-5ca9-4701-aabc-49c18493ef1e_1242x1269.jpg',
      alt: 'Extra Banku',
      price: '4.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf99',
      body: 'Jollof with chicken stew',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/jollof%20and%20chicken.jpeg?alt=media&token=18865f98-9501-43d7-b64a-ac873d16b59e',
      alt: 'Jollof with chicken stew',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf100',
      body: 'Jollof with fish stew',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Jollof-fish.jpeg?alt=media&token=d504537a-1f6d-45fa-b9b2-65ae4bd62626',
      alt: 'Jollof with fish stew',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf200',
      body: 'Plain rice with fish stew',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/plain%20rice%20and%20fish%20stew.jpeg?alt=media&token=5aeeabbb-e546-4fd4-8588-98ead8e67b29',
      alt: 'Plain rice with fish stew',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf201',
      body: 'Plain rice with chicken stew',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/plain%20rice%20and%20chicken%20stew.jpeg?alt=media&token=f2a7a19b-1ec8-4609-8c8f-60281af0586d',
      alt: 'Plain rice with chicken stew',
      price: '45.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf202',
      body: 'Plain rice with goat stew',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/plain%20rice%20and%20goat%20stew.jpeg?alt=media&token=dec66af8-4351-4962-9c80-624bfe37f5d9',
      alt: 'Plain rice with goat stew',
      price: '51.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf202',
      body: 'Jollof rice with goat stew',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/jollof%20rice%20and%20goat.jpeg?alt=media&token=bffa5ea0-4572-4d42-8b14-6ffa2d2285c9',
      alt: 'Jollof rice with goat stew',
      price: '51.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf203',
      body: 'Extra plain rice',
      image: 'https://www.pinasgifts.com/image/cache/data/148/214-500x500.png',
      alt: 'Extra plain rice',
      price: '17.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf204',
      body: 'Extra fried rice',
      image: 'https://i.ytimg.com/vi/UK4pnPX-YGI/maxresdefault.jpg',
      alt: 'Extra fried rice',
      price: '17.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf203',
      body: 'Extra jollof rice',
      image:
        'https://cheflolaskitchen.com/wp-content/uploads/2018/10/Jollof-Rice-17.jpg',
      alt: 'Extra jollof rice',
      price: '17.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf204',
      body: 'Extra pepper/ketchup',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8MB5HtoN3BtFWwgcadcUygAgew5p1ylNvew&usqp=CAU',
      alt: 'Extra pepper/ketchup',
      price: '1.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf205',
      body: 'Extra coleslaw/gravy',
      image:
        'https://kristineskitchenblog.com/wp-content/uploads/2021/06/coleslaw-dressing-1200-square-312.jpg',
      alt: 'Extra coleslaw/gravy',
      price: '2.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf206',
      body: 'Banku with grilled tilapia(full)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Grilled-tilapia-with-Banku.jpeg?alt=media&token=93802759-01ea-4aa6-9440-e458c1ab3dde',
      alt: 'Banku with grilled tilapia(full)',
      price: '51.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf207',
      body: 'Banku with fried tilapia(full)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Grilled-tilapia-with-Banku.jpeg?alt=media&token=93802759-01ea-4aa6-9440-e458c1ab3dde',
      alt: 'Banku with fried tilapia(full)',
      price: '51.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf500',
      body: 'Banku with fried tilapia(half)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Grilled-tilapia-with-Banku.jpeg?alt=media&token=93802759-01ea-4aa6-9440-e458c1ab3dde',
      alt: 'Banku with fried tilapia(half)',
      price: '43.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf501',
      body: 'Banku with grilled tilapia(half)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Grilled-tilapia-with-Banku.jpeg?alt=media&token=93802759-01ea-4aa6-9440-e458c1ab3dde',
      alt: 'Banku with grilled tilapia(half)',
      price: '43.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf502',
      body: 'Banku with tilapia Soup(half)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/banku-with-tilapia%20Background%20Removed.png?alt=media&token=ddb6fecd-432e-4f65-9f0b-7d76efe6781a',
      alt: 'Banku with tilapia Soup(half)',
      price: '47.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf503',
      body: 'Banku with tilapia Soup(full)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/banku-with-tilapia%20Background%20Removed.png?alt=media&token=ddb6fecd-432e-4f65-9f0b-7d76efe6781a',
      alt: 'Banku with tilapia Soup(full)',
      price: '47.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf504',
      body: 'Fried rice with grilled chicken',
      image:
        'https://www.flavcity.com/wp-content/uploads/2018/07/chicken-fried-rice-500x375.jpg',
      alt: 'Fried rice with grilled chicken',
      price: '45.00',
      category: 'fast food',
    },

    {
      id: '91fcca31cba046fea468af2c659bcf506',
      body: 'Jollof rice with grilled chicken',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Grilled-chicken-with-Jollof-rice.jpeg?alt=media&token=710d0b71-2cd8-4dd4-9024-723d532c6825',
      alt: 'Jollof rice with grilled chicken',
      price: '45.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf507',
      body: 'Jollof rice with grilled chicken and whole fish',
      image:
        'https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/96080951_1245279885667045_5115972284862955520_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9267fe&_nc_ohc=-dlBy3RyiNgAX-YfaiR&_nc_ht=scontent.facc5-1.fna&oh=00_AfCiG1hcposFZoBNyhmp0cspLD3lyT8J-KYnq6wO5dHVBA&oe=639DD1DF',
      alt: 'Jollof rice with grilled chicken and whole fish',
      price: '47.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf508',
      body: 'Fried rice with grilled chicken and whole fish',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/fried%20rice%20with%20chicken%20and%20fish.jpeg?alt=media&token=32136a77-b17f-4a40-83fc-ebc2583fae59',
      alt: 'Fried rice with grilled chicken and whole fish',
      price: '47.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf509',
      body: 'Chicken and yam chips',
      image:
        'https://myrecipejoint.com/wp-content/uploads/2020/08/file-15523190795961-500x500.jpg',
      alt: 'Chicken and yam chips',
      price: '47.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf510',
      body: 'Chicken and chips',
      image:
        'https://healthguide.ng/wp-content/uploads/2021/09/images-11-2021-09-16T132232.997.jpeg',
      alt: 'Chicken and chips',
      price: '47.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf511',
      body: 'Fish and yam chips',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/fish%20and%20yam%20chips.jpeg?alt=media&token=79e5f766-db3c-4077-b0a8-e942570abd55',
      alt: 'Fish and yam chips',
      price: '48.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf512',
      body: 'Fish and  chips',
      image:
        'https://www.thespruceeats.com/thmb/k8Ejnb3LR7yrhwGirJEC2x6r1sg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-fish-and-chips-recipe-434856-Hero-5b61b89346e0fb00500f2141.jpg',
      alt: 'Fish and  chips',
      price: '48.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf513',
      body: 'Fried Boneless fish with fried rice',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhzPJPoEZYCGYcfg-yr-X5BL2RT2XSDeGTc8mw2QdLas8mhHRezWbqitnub348ByuFDM&usqp=CAU',
      alt: 'Fried Boneless fish with fried rice',
      price: '60.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf514',
      body: 'Fried Boneless fish with chips',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/fish%20and%20chips.jpeg?alt=media&token=0a8a66bc-9b8e-451d-bac5-ed8ec74e62e1',
      alt: 'Fried Boneless fish with chips',
      price: '60.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf515',
      body: 'Rice with chicken wings',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tKOVdFvIwAGeoQ2B9svKoa0Bp0a3awULBg&usqp=CAU',
      alt: 'Rice with chicken wings',
      price: '47.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf516',
      body: 'chips only',
      image:
        'https://mamacassng.com/wp-content/uploads/2021/05/mamacass-chicken1.jpg',
      alt: 'chips only',
      price: '19.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf517',
      body: 'quarter chicken',
      image:
        'https://cravingtasty.com/wp-content/uploads/2018/09/Crispy-chicken-leg-quarters-recipe-2-1.jpg',
      alt: 'quarter chicken',
      price: '30.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf518',
      body: 'Fish only',
      image:
        'https://thumbs.dreamstime.com/z/homemade-tasty-roasted-fish-exotic-spices-herbs-traditional-recipe-asian-cuisine-delicious-spicy-deep-fried-fish-119378002.jpg',
      alt: 'Fish only',
      price: '33.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf519',
      body: 'Goat only',
      image:
        'https://img-global.cpcdn.com/recipes/ed2e7af158f1a4b0/751x532cq70/fried-goat-meat-recipe-main-photo.jpg',
      alt: 'Goat only',
      price: '45.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf520',
      body: 'Generation spicy chicken',
      image:
        'https://image.eatencdn.com/image/3fe585f1-e551-44cd-ac38-b4fb5bd5c7b4/image.jpg',
      alt: 'Generation spicy chicken',
      price: '35.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf521',
      body: 'Fried rice with goat',
      image: 'https://i.ytimg.com/vi/obcX5BAFv2E/maxresdefault.jpg',
      alt: 'Fried rice with goat',
      price: '51.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf522',
      body: 'chips with goat',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/chips%20with%20goat.jpeg?alt=media&token=61610bbc-77ee-47e9-85bb-4f5bad9c3b94',
      alt: 'chips with goat',
      price: '55.00',
      category: 'fast food',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf523',
      body: 'side salad or coleslaw',
      image:
        'https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      alt: 'side salad or coleslaw',
      price: '22.00',
      category: 'salad',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf524',
      body: 'mixed salad',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      alt: 'mixed salad',
      price: '40.00',
      category: 'salad',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf525',
      body: 'Tuna Salad',
      image:
        'https://downshiftology.com/wp-content/uploads/2020/04/Tuna-Salad-3-500x500.jpg',
      alt: 'Tuna Salad',
      price: '40.00',
      category: 'salad',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf526',
      body: 'Fish salad',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgSWIEV6KbhTKWUeUWkzCP9Vg7S4PJlZGYg&usqp=CAU',
      alt: 'Fish salad',
      price: '47.00',
      category: 'salad',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf527',
      body: 'Generation Game special salad',
      image:
        'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'Generation Game special salad',
      price: '47.00',
      category: 'salad',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf528',
      body: 'vegetable salad',
      image:
        'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps183152_TH143194B06_06_7b.jpg',
      alt: 'vegetable salad',
      price: '30.00',
      category: 'vegetarian',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf529',
      body: 'vegetables sauce with rice',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/vegetable%20sauce%20with%20rice.jpeg?alt=media&token=dc0e5ca1-f8d5-44be-a68a-06efde8007ca',
      alt: 'vegetables sauce with rice',
      price: '40.00',
      category: 'vegetarian',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf530',
      body: 'vegetables sauce with chips',
      image:
        'https://thumbs.dreamstime.com/z/chicken-gizzards-vegetable-sauce-french-fries-chicken-gizzards-stewed-vegetable-sauce-served-french-fries-198892031.jpg',
      alt: 'vegetables sauce with chips',
      price: '42.00',
      category: 'vegetarian',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf531',
      body: 'vegetables sauce with noodles',
      image:
        'https://www.inspiredtaste.net/wp-content/uploads/2019/02/Vegetable-Spaghetti-Recipe-1200.jpg',
      alt: 'vegetables sauce with noodles',
      price: '40.00',
      category: 'vegetarian',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf532',
      body: 'Assorted Rice',
      image: 'https://i.ytimg.com/vi/H3WPMf4iqrs/maxresdefault.jpg',
      alt: 'Assorted Rice',
      price: '47.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf533',
      body: 'Assorted Jollof',
      image:
        'https://www.bellanaija.com/wp-content/uploads/2021/02/thumbnail_1280X720-4.jpg',
      alt: 'Assorted Jollof',
      price: '50.00',
      category: 'local dishes',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf534',
      body: 'Indomie with vegetables',
      image: 'https://indomie.com.sa/img/recipes/main1.jpg',
      alt: 'Indomie with vegetables',
      price: '40.00',
      category: 'spaghetti',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf535',
      body: 'Indomie with chicken',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQqI3OBd-3DFG-pBMAyYaqazAOULVQ5NMqFeA5dWDsm85IT2igO5d4z10JU1SWiMR92s&usqp=CAU',
      alt: 'Indomie with chicken',
      price: '47.00',
      category: 'spaghetti',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf536',
      body: 'Indomie with fish',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/indomie%20with%20fish.jpeg?alt=media&token=dba381d6-4cc0-47e9-af71-61d1fa95e20a',
      alt: 'Indomie with fish',
      price: '49.00',
      category: 'spaghetti',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf537',
      body: 'Indomie with goat meat',
      image:
        'https://i0.wp.com/www.afrolems.com/wp-content/uploads/2014/11/asun-flavoured-indomie.jpg',
      alt: 'Indomie with goat meat',
      price: '51.00',
      category: 'spaghetti',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf538',
      body: 'Indomie with goat meat',
      image:
        'https://i0.wp.com/www.afrolems.com/wp-content/uploads/2014/11/asun-flavoured-indomie.jpg',
      alt: 'Indomie with goat meat',
      price: '51.00',
      category: 'spaghetti',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf539',
      body: 'Spaghetti with meat sauce',
      image:
        'https://momsdinner.net/wp-content/uploads/2020/10/spaghetti-with-meat-sauce-1.jpg',
      alt: 'Spaghetti with meat sauce',
      price: '50.00',
      category: 'spaghetti',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf540',
      body: 'Diced chicken with vegetables',
      image:
        'https://insanelygoodrecipes.com/wp-content/uploads/2022/02/Homemade-Kung-Pao-Chicken-with-Veggies-683x1024.jpg',
      alt: 'Diced chicken with vegetables',
      price: '50.00',
      category: 'sauces',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf541',
      body: 'Shredded beef with onions and green pepper',
      image:
        'https://tse1.mm.bing.net/th?id=OIP.T5540if289d-a2U9hJtRIwHaHa&pid=Api&P=0',
      alt: 'Shredded beef with onions and green pepper',
      price: '52.00',
      category: 'sauces',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf542',
      body: 'Shredded beef with chinese vegetables',
      image:
        'https://fthmb.tqn.com/cvh1ugg132QtmhiUDmRv58xK2Iw=/4752x3168/filters:fill(auto,1)/beef-and-vegetable-stir-fry-165955462-5834b0523df78c6f6a6af185.jpg',
      alt: 'Shredded beef with chinese vegetables',
      price: '57.00',
      category: 'sauces',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf543',
      body: 'Diced fish with vegetables',
      image:
        'https://ohsnapletseat.com/wp-content/uploads/2022/03/Pepper-Steak-with-Onion-Stir-Fry-3-scaled-720x540.jpg.webp',
      alt: 'Diced fish with vegetables',
      price: '60.00',
      category: 'sauces',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf544',
      body: 'Chicken sauce only',
      image:
        'https://rawdev.com.ng/blog/wp-content/uploads/2020/11/Chicken-Wings-Fifteen-Spatulas-6.jpg',
      alt: 'Chicken sauce only',
      price: '45.00',
      category: 'sauces',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf545',
      body: 'Beef sauce only',
      image:
        'https://sisijemimah.com/wp-content/uploads/2015/12/Shredded-beef-sauce-9.jpg',
      alt: 'Beef sauce only',
      price: '45.00',
      category: 'sauces',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf546',
      body: 'Vegetables spring rolls (one piece)',
      image:
        'https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Veggie-Spring-Rolls.jpg',
      alt: 'Beef sauce only',
      price: '6.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf547',
      body: 'meat spring rolls (one piece)',
      image:
        'https://www.elmundoeats.com/wp-content/uploads/2019/01/Spring-Rolls-500x500.jpg',
      alt: 'meat spring rolls (one piece)',
      price: '6.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf548',
      body: 'spicy fried chicken wings (one piece)',
      image:
        'https://images.unsplash.com/photo-1624153064067-566cae78993d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'spicy fried chicken wings (one piece)',
      price: '8.00',
      category: 'continental',
    },

    {
      id: '91fcca31cba046fea468af2c659bcf550',
      body: 'spicy grilled chicken wings (one piece)',
      image:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/12/13/0/FNM_010110-Wings-010_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539257894.jpeg',
      alt: 'spicy grilled chicken wings (one piece)',
      price: '8.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf552',
      body: 'Beef burger',
      image:
        'https://www.aspicyperspective.com/wp-content/uploads/2020/07/best-hamburger-patties-1-500x500.jpg',
      alt: 'Beef burger',
      price: '30.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf553',
      body: 'Chicken burger',
      image:
        'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg',
      alt: 'Chicken burger',
      price: '30.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf554',
      body: 'Egg burger',
      image:
        'https://www.saudereggs.com/content/uploads/2019/01/ham-egg-cheese-breakfast-burgers.jpg',
      alt: 'Egg burger',
      price: '32.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf555',
      body: 'Cheese burger',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Cheese-burger.jpeg?alt=media&token=3ae49488-9fcc-4a0c-800d-026c68e359f5',
      alt: 'Cheese burger',
      price: '35.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf556',
      body: 'Egg & Cheese burger',
      image:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/4/2/3/LS-Library_Bacon-Egg-Cheese-Breakfast-Burgers_s4x3.jpg.rend.hgtvcom.616.462.suffix/1522721805486.jpeg',
      alt: 'Egg & Cheese burger',
      price: '38.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf557',
      body: 'Double beef burger',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/1c/cd/af/5b/double-gorilla-burger.jpg',
      alt: 'Double beef burger',
      price: '44.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf558',
      body: 'Egg salad sandwich in rolls',
      image:
        'https://foodnessgracious.com/wp-content/uploads/2018/03/egg-salad-rolls-04.jpg',
      alt: 'Egg salad sandwich in rolls',
      price: '30.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf559',
      body: 'Egg salad sandwich in bread',
      image:
        'https://www.shugarysweets.com/wp-content/uploads/2019/04/egg-salad-recipe.jpg',
      alt: 'Egg salad sandwich in bread',
      price: '30.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf560',
      body: 'Tuna salad sandwich in bread',
      image:
        'https://totallythebomb.com/wp-content/uploads/2015/06/tuna-sandwich.jpg',
      alt: 'Tuna salad sandwich in bread',
      price: '30.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf561',
      body: 'Tuna salad sandwich in rolls',
      image:
        'https://c.recipeland.com/images/r/16176/411adb0c589a95ca4993_1024.jpg',
      alt: 'Tuna salad sandwich in rolls',
      price: '30.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf562',
      body: 'chicken salad sandwich in rolls',
      image:
        'https://hips.hearstapps.com/del.h-cdn.co/assets/17/32/1502305153-chicken-salad-sandwich-delish-1.jpg',
      alt: 'chicken salad sandwich in rolls',
      price: '32.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf563',
      body: 'chicken salad sandwich in bread',
      image:
        'https://static01.nyt.com/images/2015/04/06/dining/chicken-salad-sandwich/chicken-salad-sandwich--articleLarge-v3.jpg',
      alt: 'chicken salad sandwich in bread',
      price: '32.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf564',
      body: 'Meat sandwich',
      image:
        'https://girlscangrill.com/wp-content/uploads/2020/09/roast-beef-sandwich.jpg',
      alt: 'Meat sandwich',
      price: '34.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf565',
      body: 'chicken club sandwich',
      image:
        'https://realfood.tesco.com/media/images/RFO-1400x919-ChickenClubSandwich-0ee77c05-5a77-49ac-a3bd-4d45e3b4dca7-0-1400x919.jpg',
      alt: 'chicken club sandwich',
      price: '34.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf566',
      body: 'Grilled chinese sandwich',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/grilled-chinese%20sandwich%20Background%20Removed.png?alt=media&token=fdc8ce70-8059-4fca-bd5d-5cc9fb40fa83',
      alt: 'Grilled chinese sandwich',
      price: '35.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf567',
      body: 'Chicken club sandwich and chips',
      image:
        'https://www.eatingcultures.co.in/wp-content/uploads/2018/12/desi-chinese-sandwich-ready.jpg',
      alt: 'Chicken club sandwich and chips',
      price: '56.00',
      category: 'continental',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf568',
      body: 'vegetarian pizza (mixed vegetables,mushroom,olive with cheese topping)',
      image:
        'https://www.blessthismessplease.com/wp-content/uploads/2020/05/veggie-pizza-recipe-4-of-8.jpg',
      alt: 'vegetarian pizza (mixed vegetables,mushroom,olive with cheese topping)',
      price: '67.00',
      category: 'pizza',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf569',
      body: 'Tuna pizza (tuna, onions, green pepper, tomatoes and cheese)',
      image:
        'https://dominionpizzas.com/wp-content/uploads/2020/05/tuna-pizza-image.jpg',
      alt: 'Tuna pizza (tuna, onions, green pepper, tomatoes and cheese)',
      price: '67.00',
      category: 'pizza',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf570',
      body: 'Four cheeze pizza',
      image:
        'https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg',
      alt: 'Four cheeze pizza',
      price: '85.00',
      category: 'pizza',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf571',
      body: 'Four cheeze pizza family size',
      image:
        'https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg',
      alt: 'Four cheeze pizza family size',
      price: '130.00',
      category: 'pizza',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf572',
      body: 'Grilled chicken pizza(grilled chicken ,onions,green pepper,tomatoes with toppings)',
      image:
        'https://thecozycook.com/wp-content/uploads/2019/08/BBQ-Chicken-Pizza--500x500.jpg',
      alt: 'Grilled chicken pizza(grilled chicken ,onions,green pepper,tomatoes with toppings)',
      price: '67.00',
      category: 'pizza',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf573',
      body: 'Sausages & mincemeat pizza (italia sausage,mincemeat,onions,green pepper,tomatoes with cheese toppings)',
      image:
        'https://marisasitaliankitchen.com/wp-content/uploads/2015/02/Pizza-with-Sausage-and-Sweet-Peppers-5-of-6.jpg',
      alt: 'Sausages & mincemeat pizza (italia sausage,mincemeat,onions,green pepper,tomatoes with cheese toppings)',
      price: '72.00',
      category: 'pizza',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf574',
      body: 'Customers choice pizza (Beef, chicken, onions, pepper, tomatoes with cheese toppings)',
      image:
        'https://embed.widencdn.net/img/beef/pz4eba64j5/1120x840px/beef-pepper-and-onion-pizza-horizontal.tif?keep=c&u=7fueml',
      alt: 'Customers choice pizza (Beef, chicken, onions, pepper, tomatoes with cheese toppings)',
      price: '67.00',
      category: 'pizza',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf575',
      body: 'Family pizza',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/0c/83/66/41/red-deer-family-pizza.jpg',
      alt: 'Family pizza',
      price: '105.00',
      category: 'pizza',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf576',
      body: 'Extra toppings(pizza)',
      image:
        'https://previews.123rf.com/images/thesupe87/thesupe871306/thesupe87130600084/20400712-a-fresh-medium-size-specialty-pizza-with-extra-toppings-hot-and-fresh-out-of-the-oven-shallow-depth-.jpg',
      alt: 'Extra toppings(pizza)',
      price: '25.00',
      category: 'extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf600',
      body: 'Fufu with Full tilapia and Palm soup',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Fufu-with-full-tilapia.jpeg?alt=media&token=dc3a6065-2ed2-4422-bead-c02c4b2ecc3f',
      alt: 'Fufu with Full tilapia and Palm soup',
      price: '59.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf601',
      body: 'Fufu with Full tilapia and Groundnut soup',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Fufu-with-full-tilapia.jpeg?alt=media&token=dc3a6065-2ed2-4422-bead-c02c4b2ecc3f',
      alt: 'Fufu with Full tilapia and Groundnut soup',
      price: '50.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf602',
      body: 'Fufu with Half tilapia and Palm soup',
      image: 'https://i.ytimg.com/vi/f3EcAspamVQ/maxresdefault.jpg',
      alt: 'Fufu with Half tilapia and Palm soup',
      price: '49.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf603',
      body: 'Fufu with Half tilapia and Groundnut soup',
      image: 'https://i.ytimg.com/vi/f3EcAspamVQ/maxresdefault.jpg',
      alt: 'Fufu with Half tilapia and Groundnut soup',
      price: '49.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf604',
      body: 'Fufu with dry fish with Goat',
      image:
        'https://besthomediet.com/wp-content/uploads/2021/08/fufu-and-light-soup-pic-01.jpg',
      alt: 'Fufu with dry fish with Goat',
      price: '60.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf605',
      body: 'Fufu with dry fish with beef',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/fufu-dry-fish.jpeg?alt=media&token=6086fa62-1854-4dcd-ad99-f6499ffb8030',
      alt: 'Fufu with dry fish with beef',
      price: '60.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf606',
      body: 'Fufu with salmon with Goat',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Fufu-special.jpeg?alt=media&token=db81267f-4867-4219-a6f6-e07d1fe23f76',
      alt: 'Fufu with salmon with Goat',
      price: '59.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf607',
      body: 'Fufu with salmon and beef',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/fufu-with-salmon2.png?alt=media&token=3b868ba5-f36e-469b-9d24-85bf71b4d881',
      alt: 'Fufu with salmon with beef',
      price: '59.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf608',
      body: 'Fufu with tuna and Goat',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/fufu-with-tuna-and-goat%20Background%20Removed.png?alt=media&token=44d49289-05af-4d47-b64c-3ba31d105f8b',
      alt: 'Fufu with tuna and Goat',
      price: '59.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf609',
      body: 'Fufu with tuna and Beef',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/fufu-with-tuna-beef.jpeg?alt=media&token=08aadbcf-5ac1-4514-b3d6-7dea43aa6601',
      alt: 'Fufu with tuna and Beef',
      price: '59.00',
      category: 'special order',
    },

    {
      id: '91fcca31cba046fea468af2c659bcf612',
      body: 'Apem/Yam with Egg stew with Full Tilapia',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/apenm%3Ayam-egg-stew-tilapia.jpeg?alt=media&token=f8027c88-0388-499c-a1cf-18c9cb338de2',
      alt: 'Apem/Yam with Egg stew with Full Tilapia',
      price: '70.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf613',
      body: 'Apem/Yam with Palava with Half Tilapia',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Yam-with-palava-sauce.jpeg?alt=media&token=dbf2a00e-8f69-4251-816f-81bb9fe2086c',
      alt: 'Apem/Yam with Palava with Half Tilapia',
      price: '59.00',
      category: 'special order',
    },

    {
      id: '91fcca31cba046fea468af2c659bcf611',
      body: 'Apem/Yam with Palava sauce with Full Tilapia',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8HuENoW6b-g9hjXB5u2eNA2fumzUCp9o6xtAUTTWZSoDY1H_yVTJu_ElO8mU9wa1FsE&usqp=CAU',
      alt: 'Apem/Yam with Palava sauce with Full Tilapia',
      price: '70.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf615',
      body: 'Apem/Yam with Palava and Koobi',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Yam-with-palava-sauce.jpeg?alt=media&token=dbf2a00e-8f69-4251-816f-81bb9fe2086c',
      alt: 'Apem/Yam with Palava and Koobi',
      price: '62.00',
      category: 'special order',
    },

    {
      id: '91fcca31cba046fea468af2c659bcf616',
      body: 'Apem/Yam with Egg Stew and Koobi',
      image:
        'https://ocdn.eu/images/pulscms/ODI7MDA_/c0ee147c47ed3b1f41e3287ae7314296.jpg',
      alt: 'Apem/Yam with Egg Stew and Koobi',
      price: '62.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf617',
      body: 'Ripe Plantain with Full Tilapia',
      image:
        'https://www.thedreamafrica.com/wp-content/uploads/2018/01/best-grilled-fish-and-dodo.jpg',
      alt: 'Ripe Plantain with Full Tilapia',
      price: '59.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf614',
      body: 'Apem/Yam with Egg stew Half Tilapia',
      image:
        'https://firebasestorage.googleapis.com/v0/b/generation-game-restaurant.appspot.com/o/Yam-with-palava-sauce.jpeg?alt=media&token=dbf2a00e-8f69-4251-816f-81bb9fe2086c',
      alt: 'Apem/Yam with Egg stew Half Tilapia',
      price: '59.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf618',
      body: 'Ripe Plantain with Half Tilapia',
      image:
        'https://www.thedreamafrica.com/wp-content/uploads/2018/01/best-grilled-fish-and-dodo.jpg',
      alt: 'Ripe Plantain with Half Tilapia',
      price: '49.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf619',
      body: 'Omotuo with Cow Feet and Goat',
      image:
        'https://myrecipejoint.com/wp-content/uploads/2021/06/723c61ae6341c8343b375a73253f7f441.jpeg',
      alt: 'Omotuo with Cow Feet and Goat',
      price: '51.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf620',
      body: 'Omotuo with Cow Feet and Beef',
      image:
        'https://myrecipejoint.com/wp-content/uploads/2021/06/723c61ae6341c8343b375a73253f7f441.jpeg',
      alt: 'Omotuo with Cow Feet and Beef',
      price: '51.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf621',
      body: 'Vegetable Jollof with Full Tilapia',
      image: 'https://i.ytimg.com/vi/cOGZOgDnk-o/maxresdefault.jpg',
      alt: 'Vegetable Jollof with Full Tilapia',
      price: '62.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf622',
      body: 'Vegetable Rice with Full Tilapia',
      image:
        'https://i1.wp.com/www.spicyfafa.com/wp-content/uploads/2013/05/fried-rice-with-egg-and-vegetables-and-fried-tilapia.jpg?fit=1024%2C768&ssl=1',
      alt: 'Vegetable Rice with Full Tilapia',
      price: '62.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf623',
      body: 'Vegetable Jollof with Half Tilapia',
      image:
        'https://i.pinimg.com/originals/07/8d/77/078d77a3e8221ac2242842d71843a51d.jpg',
      alt: 'Vegetable Jollof with Half Tilapia',
      price: '52.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf624',
      body: 'Vegetable Rice with Half Tilapia',
      image:
        'https://i1.wp.com/www.spicyfafa.com/wp-content/uploads/2013/05/fried-rice-with-egg-and-vegetables-and-fried-tilapia.jpg?fit=1024%2C768&ssl=1',
      alt: 'Vegetable Rice with Half Tilapia',
      price: '52.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf625',
      body: 'Vegetable Jollof with Goat',
      image:
        'https://i0.wp.com/biscuitsandladles.com/wp-content/uploads/2018/02/jollof-with-goat-meat.jpg?ssl=1',
      alt: 'Vegetable Jollof with Goat',
      price: '55.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf626',
      body: 'Vegetable Jollof with Beef',
      image:
        'https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/leafy-jollof-rice.jpg',
      alt: 'Vegetable Jollof with Beef',
      price: '55.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf627',
      body: 'Vegetable Rice with Goat',
      image:
        'https://i0.wp.com/dobbyssignature.com/wp-content/uploads/2020/03/Goat-meat-coconut-rice.jpg?resize=720%2C720&ssl=1',
      alt: 'Vegetable Rice with Goat',
      price: '55.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf628',
      body: 'Vegetable Rice with Beef',
      image:
        'https://img-global.cpcdn.com/recipes/ebd61008fa2d4a14/680x482cq70/vegetable-rice-and-beef-stew-recipe-main-photo.jpg',
      alt: 'Vegetable Rice with Beef',
      price: '55.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf629',
      body: 'Fried Rice with Full Tilapia',
      image:
        'https://i1.wp.com/www.spicyfafa.com/wp-content/uploads/2013/05/fried-rice-with-egg-and-vegetables-and-fried-tilapia.jpg?fit=1024%2C768&ssl=1',
      alt: 'Fried Rice with Full Tilapia',
      price: '59.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf630',
      body: 'Plain Rice with Full Tilapia',
      image:
        'https://biscuitsandladles.com/wp-content/uploads/2018/08/baked-tilapia-with-attieke-and-tomato-and-onion-salad-500x500.jpg',
      alt: 'Plain Rice with Full Tilapia',
      price: '59.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf631',
      body: 'Jollof with Full Tilapia',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/04/3b/59/89/run-off-restaurant-and.jpg',
      alt: 'Jollof with Full Tilapia',
      price: '59.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf632',
      body: 'Fried Rice with Half Tilapia',
      image: 'https://live.staticflickr.com/2176/2155452350_ac649fbf28_b.jpg',
      alt: 'Fried Rice with Half Tilapia',
      price: '48.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf633',
      body: 'Plain Rice with Half Tilapia',
      image:
        'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Tilapia-with-Jasmine-Rice_EXPS_SDDJ17_39834_B08_03_1b.jpg',
      alt: 'Plain Rice with Half Tilapia',
      price: '48.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf634',
      body: 'Jollof with Half Tilapia',
      image:
        'https://i.pinimg.com/originals/07/8d/77/078d77a3e8221ac2242842d71843a51d.jpg',
      alt: 'Jollof with Half Tilapia',
      price: '48.00',
      category: 'special order',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf635',
      body: 'Extra Cowfeet, Tuna , Crab , Wele',
      image: '',
      alt: 'Extra Cowfeet, Tuna , Crab , Wele',
      price: '15.00',
      category: 'Extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf636',
      body: 'Extra River Fish',
      image:
        'https://thumbs.dreamstime.com/b/background-small-fish-caught-river-crucian-carp-57148744.jpg',
      alt: 'Extra River Fish',
      price: '19.00',
      category: 'Extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf637',
      body: 'Extra Salmon',
      image:
        'https://www.skinnytaste.com/wp-content/uploads/2018/12/Baked-Salmon-1.jpg',
      alt: 'Extra Salmon',
      price: '20.00',
      category: 'Extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf637',
      body: 'Extra Tuna',
      image:
        'https://www.seriouseats.com/thmb/N_vZayV1UT8Bbx1u0VB0L9t3PJ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__08__20160827-sous-vide-tuna-41-77b48f9e66044d98921fd1230b581a25.jpg',
      alt: 'Extra Tuna',
      price: '20.00',
      category: 'Extras',
    },
    {
      id: '91fcca31cba046fea468af2c659bcf638',
      body: 'Fufu with Dry Fish',
      image:
        'https://ocdn.eu/images/pulscms/N2M7MDA_/7df21359e6656c722116a196b81acc55.jpeg',
      alt: 'Fufu with Dry Fish',
      price: '50.00',
      category: 'Extras',
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

  onSearchFood(searchTerm: string, category: string) {
    if (!searchTerm) {
      return this.getFoodByCategory(category);
    }
    return this.getFoodByCategory(category).filter((it) => {
      return it.body.toLocaleLowerCase().includes(searchTerm);
    });
  }

  onGetCategories(): string[] {
    this.getAllFoods().forEach((item) => {
      if (!this.categories.includes(item.category)) {
        this.categories.push(item.category);
      }
    });
    return this.categories;
  }
}
