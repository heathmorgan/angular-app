import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MyAddressFormComponent} from "../my-address-form/my-address-form.component";
import {MyDashboardComponent} from "../my-dashboard/my-dashboard.component";
import {MyTableComponent} from "../my-table/my-table.component";
import {MyTreeComponent} from "../my-tree/my-tree.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-my-navigation',
  templateUrl: './my-navigation.component.html',
  styleUrl: './my-navigation.component.scss',
  standalone: true,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        AsyncPipe,
        MatSlideToggle,
        MyAddressFormComponent,
        MyDashboardComponent,
        MyTableComponent,
        MyTreeComponent,
        RouterOutlet,
    ]
})
export class MyNavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
