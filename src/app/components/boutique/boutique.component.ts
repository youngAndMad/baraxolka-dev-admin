import { ApiService } from 'src/app/services/api.service';
import { Boutique } from './../../model/Boutique';
import { Component, Input } from '@angular/core';
import { Address } from 'src/app/model/Address';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css'],
})
export class BoutiqueComponent {
  @Input() address: Address;
  boutique: Boutique;

  constructor(private apiService: ApiService) {}

}
