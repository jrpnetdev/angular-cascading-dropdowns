import { Component, Input } from '@angular/core';
import { CountryService } from '../services/country.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-dropdown',
  imports: [CommonModule],
  templateUrl: './child-dropdown.component.html',
})
export class ChildDropdownComponent {
  @Input() selectedCountry: string = '';
  states: string[] = [];

  constructor(private countryService: CountryService) {}

  ngOnChanges() {
    this.states = this.countryService.getStatesByCountry(this.selectedCountry);
  }
}
