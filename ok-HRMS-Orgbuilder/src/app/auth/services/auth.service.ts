import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false); // Initial value is false (not logged in)

  constructor() {}

  // Get the current authentication status as an observable
  getAuthStatus() {
    return this.isAuthenticated.asObservable();
  }

  // Call this method to log the user in
  login() {
    this.isAuthenticated.next(true);  // Emit 'true' to signal that the user is logged in
  }

  // Call this method to log the user out
  logout() {
    this.isAuthenticated.next(false); // Emit 'false' to signal that the user is logged out
  }
}
