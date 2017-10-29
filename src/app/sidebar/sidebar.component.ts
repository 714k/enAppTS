import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SidebarService, MenuItem } from './sidebar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})

export class SidebarComponent {

	mainMenuItems;
  activeMenuItem$: Observable<MenuItem>;

  constructor(private sidebarService: SidebarService) {
    this.mainMenuItems = this.sidebarService.getMenuItems();
    this.activeMenuItem$ = this.sidebarService.activeMenuItem$;
  }

}
