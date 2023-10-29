import { Component } from '@angular/core';
import { SidebarStatusService } from './gifs/services/sidebar-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gif-app';
  constructor() {}
}
