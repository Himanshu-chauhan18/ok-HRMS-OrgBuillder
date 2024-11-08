import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs'; // Import firstValueFrom to await the observable

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // Await the observable to get the authentication status
  const isAuthenticated = await firstValueFrom(authService.getAuthStatus());

  // If the user is authenticated, allow the route to be activated
  if (isAuthenticated) {
    return true;
  }

  // If the user is not authenticated, redirect to the login page
  router.navigate(['login']);
  return false;
};
