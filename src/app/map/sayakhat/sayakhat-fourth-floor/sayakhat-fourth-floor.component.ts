import {Component, OnInit} from '@angular/core';
import {Address} from "../../../model/Address";
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-sayakhat-fourth-floor',
  templateUrl: './sayakhat-fourth-floor.component.html',
  styleUrls: ['./sayakhat-fourth-floor.component.css']
})
export class SayakhatFourthFloorComponent implements OnInit{

  addressList:Address[];

  constructor(private apiService:ApiService) {
  }

  ngOnInit():void {
    this.apiService.getAllByDetails(4 , 'Sayakhat').subscribe(
      (response => this.apiService = response)
    )
  }
}
