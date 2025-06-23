import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const token = auth.getToken();

  if (token && token !== 'null' && token !== 'undefined') {
    return true;
  }

  router.navigate(['/register']);
  return false;
};
