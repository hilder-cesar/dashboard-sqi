import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  setAuthentication(authentication: any, rememberMe: boolean): void {
    authentication = JSON.stringify(authentication);
    rememberMe
      ? localStorage.setItem('authentication', authentication)
      : sessionStorage.setItem('authentication', authentication);
  }

  getAuthentication(): any {
    const localStorageAuthentication = localStorage.getItem('authentication') || null;
    const sessionStorageAuthentication = sessionStorage.getItem('authentication') || null
    const authentication = localStorageAuthentication || sessionStorageAuthentication;
    return authentication ? JSON.parse(authentication) : null;
  }

  unsetAuthentication(): void {
    localStorage.removeItem('authentication');
    sessionStorage.removeItem('authentication');
  }

  isLoggedIn(): boolean {
    const localStorageAuthentication = localStorage.getItem('authentication');
    const sessionStorageAuthentication = sessionStorage.getItem('authentication');
    return localStorageAuthentication || sessionStorageAuthentication ? true : false;
  }

}
