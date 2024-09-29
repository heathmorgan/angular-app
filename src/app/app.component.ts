import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MyAddressFormComponent} from "./my-address-form/my-address-form.component";
import {MyDashboardComponent} from "./my-dashboard/my-dashboard.component";
import {MyNavigationComponent} from "./my-navigation/my-navigation.component";
import {MyTableComponent} from "./my-table/my-table.component";
import {MyTreeComponent} from "./my-tree/my-tree.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggle, MyAddressFormComponent, MyDashboardComponent, MyNavigationComponent, MyTableComponent, MyTreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
