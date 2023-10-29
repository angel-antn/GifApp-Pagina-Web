import { Component, Input } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
import { SidebarStatusService } from 'src/app/gifs/services/sidebar-status.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(
    private gifsService: GifsService,
    private sidebarStatus: SidebarStatusService
  ) {}

  get tagHistory() {
    return this.gifsService.tagHistory;
  }

  searchTag(tag: string) {
    this.sidebarStatus.changeStatus();
    return this.gifsService.searchTag(tag);
  }

  get show() {
    return this.sidebarStatus.show;
  }

  changeShowStatus() {
    this.sidebarStatus.changeStatus();
  }
}
