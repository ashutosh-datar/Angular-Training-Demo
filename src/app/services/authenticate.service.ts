import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  login(username: string, password: string) {
    // HTTP Call
    if (username === 'ashutosh' && password === 'ashutosh') {
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    localStorage.setItem('loggedIn', 'false');
    return false;
  }
}
