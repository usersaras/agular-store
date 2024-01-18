import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Role } from './role';

export const hasRoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userRole = inject(AuthService).getUserRole();

  const expectedRoles = route.data['roles'];

  const x = expectedRoles.some((role: Role) => {
    console.log(role, userRole);
    return role === userRole;
  });

  console.log(x);

  const hasRole = expectedRoles.some((role: Role) => role === userRole);

  return hasRole || router.navigate(['unauthorized']);
};
