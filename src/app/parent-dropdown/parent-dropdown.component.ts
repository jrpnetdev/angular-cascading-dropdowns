import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { CountryService } from '../services/country.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ChildDropdownComponent } from '../child-dropdown/child-dropdown.component';

@Component({
  selector: 'app-parent-dropdown',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ChildDropdownComponent,
  ],
  templateUrl: './parent-dropdown.component.html',
})
export class ParentDropdownComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  countries: string[] = [];

  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.countries = this.countryService.getCountries();
    this.formGroup = this.formBuilder.group({
      countryControl: [''], // Initialize with an empty value
    });
  }

  onCountryChange() {
    // No need to do anything here, the child component will automatically update the states based on the selected country.
  }
}
