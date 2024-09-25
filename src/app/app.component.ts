import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MyAddressFormComponent} from "./my-address-form/my-address-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggle, MyAddressFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
