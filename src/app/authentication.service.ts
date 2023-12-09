// authentication.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedIn = false;

  login() {
    
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  get isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
