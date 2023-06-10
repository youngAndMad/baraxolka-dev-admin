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
    localStorage.setItem('token' , 'a141130e2a69206450ee764d4dccda1961f496f1')
  }
}
