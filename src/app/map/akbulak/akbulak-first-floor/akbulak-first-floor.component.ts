import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from '../../../services/modal.service';
import { Address } from 'src/app/model/Address';

@Component({
  selector: 'app-akbulak-first-floor',
  templateUrl: './akbulak-first-floor.component.html',
  styleUrls: ['./akbulak-first-floor.component.css'],
})
export class AkbulakFirstFloorComponent implements OnInit {
  searchText: string;
  isPopupOpen = false;

  selected: any;
  selectedAddress: Address;

  addressList: Address[] = [];

  leftNodes: string[] = [];
  rightNodes: string[] = [];
  middleNodes: string[] = [];

  constructor(
    private apiService: ApiService,
  ) {
    this.leftNodes = [
      'left_1',
      'left_2',
      'left_3',
      'left_4',
      'left_5',
      'left_6',
      'left_7',
      'left_8',
    ];
    this.middleNodes = [
      'middle_up_left',
      'middle_up_right',
      'middle_middle_left',
      'middle_middle_right',
      'middle_bottom_right',
      'middle_bottom_left',
      'middle_bottom_middle',
    ];
    this.rightNodes = [
      'right_1',
      'right_2',
      'right_3',
      'right_4',
      'right_5',
      'right_6',
      'right_7',
      'right_8',
    ];
  }

  getAddressList(node: string): Address[] {
    let value;
    switch (node) {
      case 'left_1':
        return this.addressList.slice(0, 12);
      case 'left_2':
        return this.addressList.slice(12, 24);
      case 'left_3':
        return this.addressList.slice(24, 36);
      case 'left_4':
        return this.addressList.slice(36, 48);
      case 'left_5':
        return this.addressList.slice(48, 60);
      case 'left_6':
        return this.addressList.slice(60, 72);
      case 'left_7':
        return this.addressList.slice(72, 84);
      case 'left_8':
        return this.addressList.slice(84, 96);
      case 'middle_up_left':
        return this.addressList.slice(96, 103);
      case 'middle_middle_left':
        return this.addressList.slice(103, 105);
      case 'middle_middle_right':
        return this.addressList.slice(105, 107);
      case 'middle_bottom_left':
        return this.addressList.slice(107, 108);
      case 'middle_bottom_middle':
        return this.addressList.slice(108, 110);
      case 'middle_bottom_right':
        return this.addressList.slice(110, 111);
      case 'middle_up_right':
        return this.addressList.slice(111, 118);
      case 'right_1':
        return this.addressList.slice(118, 130);
      case 'right_2':
        return this.addressList.slice(130, 142);
      case 'right_3':
        return this.addressList.slice(142, 154);
      case 'right_4':
        return this.addressList.slice(154, 166);
      case 'right_5':
        return this.addressList.slice(166, 178);
      case 'right_6':
        return this.addressList.slice(178, 190);
      case 'right_7':
        return this.addressList.slice(190, 202);
      case 'right_8':
        return this.addressList.slice(202, 214);
      default:
        return [];
    }
  }

  ngOnInit(): void {
    this.apiService.getAllByDetails(1, 'Akbulak').subscribe((response) => {
      this.addressList = response.results;
    });
  }

  clickDiv(element: Element, address: Address) {
    if (address.isDeleted) {
      return;
    }
    this.selectedAddress = address;
    this.selected = element;
    this.openPopup();
  }

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }
  handleChangeInput() {
    let text = this.searchText.toLowerCase();
    if (text === '') {
      this.addressList.forEach((address) => {
        let el = document.getElementById(`${address.id}`);
        if (el) {
          el.setAttribute('style', 'background-color: white');
        }
      });
    } else {
      this.addressList.forEach((address) => {
        if (
          (!address.isDeleted &&
            address.container.toLowerCase().includes(text)) ||
          address.boutique?.name.toLowerCase().includes(text) ||
          address.boutique?.categories
            .map((category) => category.name.toLowerCase())
            .includes(text)
        ) {
          let el = document.getElementById(`${address.id}`);
          if (el) {
            el.setAttribute('style', 'background-color: #3845d6');
          }
        }
      });
    }
  }
}
