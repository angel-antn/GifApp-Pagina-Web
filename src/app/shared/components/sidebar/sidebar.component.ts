import { Component, HostListener, Input, OnInit } from '@angular/core';
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
    if (window.innerWidth < 768) this.sidebarStatus.changeStatus();
    return this.gifsService.searchTag(tag);
  }

  get show() {
    return this.sidebarStatus.show;
  }

  changeShowStatus() {
    this.sidebarStatus.changeStatus();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth >= 768) {
      document.querySelector('html')?.classList.remove('overflow-hidden');
      if (this.sidebarStatus.show) {
        this.sidebarStatus.changeStatus();
      }
    } else {
      if (this.sidebarStatus.show) {
        document.querySelector('html')?.classList.add('overflow-hidden');
      }
    }
  }
}
