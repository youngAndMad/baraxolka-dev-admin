import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {interval} from 'rxjs';
import {PASSWORD, PHONE} from "../config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  startTokenRefreshTimer(): void {
    this.refreshToken();
    const refreshInterval = 15 * 60 * 1000;
    interval(refreshInterval).subscribe(() => {
      this.refreshToken();
    });
  }

  private refreshToken() {
    this.http.post<any>('http://86.107.198.215:80/api/v1/auth-token/', {password:PASSWORD, phone: PHONE})
      .subscribe(response => {
        this.updateToken(response.token)
      })
  }

  private updateToken(token: any): void {
    localStorage.removeItem('token');
    localStorage.setItem('token', `${token}`);
  }

}
