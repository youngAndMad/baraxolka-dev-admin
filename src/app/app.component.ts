import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'baraxolka-admin';
  constructor(private auth:AuthService) {
  }

  ngOnInit(): void {
    this.auth.startTokenRefreshTimer();
    localStorage.setItem('token' , '4ac18a6ea77aeb0afe2c8a50524183e68fb60f2e')
  }
}
