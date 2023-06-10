import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {interval, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  startTokenRefreshTimer(): void {
    this.refreshToken();
    const refreshInterval = 15 * 60 * 1000;
    interval(refreshInterval).subscribe(() => {
      this.refreshToken();
    });
  }

  private refreshToken() {
    this.http.post<any>('http://86.107.198.215:80/api/v1/auth-token/' , {password:'87751112233' , phone:'87751112233'})
      .subscribe(response => {
        this.updateToken(response.token)
      })
  }

  private updateToken(token:any):void{
    localStorage.removeItem('token');
    console.log('new token' , token)
    localStorage.setItem('token' , `${token}`);
  }

}
