import { ApiService } from 'src/app/services/api.service';
import { Category } from '../../model/Category';
import { Boutique } from '../../model/Boutique';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  IDropdownSettings,
  MultiSelectComponent,
} from 'ng-multiselect-dropdown';
import { Address } from 'src/app/model/Address';

@Component({
  selector: 'app-edit-boutique',
  templateUrl: './edit-boutique.component.html',
  styleUrls: ['./edit-boutique.component.css'],
})
export class EditBoutiqueComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();
  @Input() address: Address;

  boutique: Boutique = new Boutique();
  categories: Category[];

  adding: boolean = false;

  form: FormGroup;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: new FormControl<string>('', Validators.required),
      container: new FormControl<string>(this?.address?.container),
      categories: new FormControl(
        this.boutique.categories,
        Validators.required
      ),
      comment: new FormControl<string>(this?.boutique?.comment),
    });
  }

  display() {
    console.log(this.form);
  }

  dropdownSettings: IDropdownSettings = {
    textField: 'name',
    idField: 'id',
    clearSearchFilter: true,
    allowRemoteDataSearch: true,
    limitSelection: 3,
    itemsShowLimit: 3,
    enableCheckAll: false,
    allowSearchFilter: true,
    unSelectAllText: 'You have to select categories',
  };

  submit() {
    let request = {
      name: this.form.get('name')?.value as string,
      container: this.form.get('container')?.value as string,
      comment: this.form.get('comment')?.value as string,
      categories: (this.form.get('categories')?.value as Category[]).map(
        (category) => category.name
      ),
      addressId: this.address.id,
    };

    this.apiService.save(request).subscribe((response) => {
      this.boutique = response;
    });

    this.closePopup();
    window.location.reload();
  }

  ngOnInit(): void {
    this.apiService.getAllCategories().subscribe((response) => {
      this.categories = response;
    });
    if (this.address.boutique){
      this.boutique = this.address.boutique;
    }else{
      this.boutique = new Boutique();
    }
  }

  handleFilterChange(multiSelect: MultiSelectComponent) {
    if (
      !this.categories
        .map((r) => r.name)
        .some((e) =>
          e.includes(multiSelect.filter.text.toString().toUpperCase())
        )
    ) {
      this.adding = true;
    }
  }


  addCategory(multiSelect: MultiSelectComponent) {
    if (multiSelect.filter.text.toString() !== '') {
      this.apiService
        .addCategory(multiSelect.filter.text.toString().toUpperCase())
        .subscribe((response) => (this.categories = response));
    }
  }

  onDropDownClose(multiSelect: MultiSelectComponent) {
    multiSelect.filter.text = '';
    this.adding = false;
  }
  closePopup() {
    this.closed.emit();
  }

  deleteBoutiqueFromAddress() {
    this.apiService
      .deleteBoutiqueById(this.address.boutique.id)
      .subscribe((response) => {
        console.log(response);
        window.location.reload();
      });
  }
}
