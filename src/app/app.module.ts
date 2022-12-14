import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { DisplayPageComponent } from './display-page/display-page.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FailedOrdersComponent } from './failed-orders/failed-orders.component';
import { IsArrayPipe } from 'src/pipes/is-array.pipe';
import { KeysPipe } from 'src/pipes/keys.pipe';
import { SingleOrderComponent } from './single-order/single-order.component';
import { FooterComponent } from './footer/footer.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OrderPageComponent,
    AdminComponent,
    LoginComponent,
    DisplayPageComponent,
    CompletedOrdersComponent,
    SidebarComponent,
    FailedOrdersComponent,
    SingleOrderComponent,
    IsArrayPipe,
    KeysPipe,
    FooterComponent,
    AvatarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    // provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestore,
    HttpClientModule,
    NgxDaterangepickerMd.forRoot(),
  ],
  providers: [ScreenTrackingService, UserTrackingService, AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}
