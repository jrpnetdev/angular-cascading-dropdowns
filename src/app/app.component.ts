import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentDropdownComponent } from './parent-dropdown/parent-dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentDropdownComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cascading-dropdown-example';
}
