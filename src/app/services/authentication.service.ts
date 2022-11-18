import { getAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  status: { loggedIn: boolean; isAdmin: boolean } = {
    loggedIn: false,
    isAdmin: false,
  };
  constructor(public afAuth: AngularFireAuth) {}

  /* Sign in */
  logIn(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async getAuthStatus() {
    let authUserstring = localStorage.getItem('authUser');
    if (authUserstring) {
      return JSON.parse(authUserstring);
    } else {
      let authUser = await this.afAuth.currentUser;
      if (authUser) {
        if (authUser.email === 'info.adroit360@gmail.com') {
          this.status = { loggedIn: true, isAdmin: true };
        } else {
          this.status = { loggedIn: true, isAdmin: false };
        }

        localStorage.setItem('authUser', JSON.stringify(this.status));
        return this.status;
      } else {
        return null;
      }
    }
  }

  /* Sign out */
  logOut() {
    localStorage.removeItem('authUser');
    return this.afAuth.signOut();
  }
}
