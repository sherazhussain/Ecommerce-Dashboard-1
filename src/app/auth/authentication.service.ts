import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService) {}
  sideBarItems = [
    {
      name: 'Dashboard',
      link: '/home',
      icon: '/assets/sidebar_icons/dashboard_inactive.svg',
      icon_active: '/assets/sidebar_icons/dashboard_active.svg',
      url_prefix: 'dashboard',
    },
    {
      name: 'User Management',
      link: '/users_management',
      icon: '/assets/sidebar_icons/user-inactive.svg',
      icon_active: '/assets/sidebar_icons/user-active.svg',
      url_prefix: 'users_management',
    },
    {
      name: 'Inventory Management',
      link: '/inventory_management',
      icon: '/assets/sidebar_icons/revenue_inactive.svg',
      icon_active: '/assets/sidebar_icons/revenue_active.svg',
      url_prefix: 'inventory_management',
    },
    {
      name: 'Product Registration',
      link: '/product_registration',
      icon: '/assets/sidebar_icons/product_registration_inactive.svg',
      icon_active: '/assets/sidebar_icons/product_registration_active.svg',
      url_prefix: 'role_permissions',
    },
    {
      name: 'Log Out',
      link: '/login',
      icon: '/assets/sidebar_icons/logout_inactive.svg',
      icon_active: '/assets/sidebar_icons/logout_active.svg',
      url_prefix: 'logout',
    },
  ];

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    // Replace by proper authentication call
    const data = {
      username: context.username,
      token: '123456',
    };
    this.credentialsService.setCredentials(data, context.remember);
    return of(data);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
