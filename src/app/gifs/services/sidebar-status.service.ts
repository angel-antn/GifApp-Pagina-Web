import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarStatusService {
  show: boolean = true;

  changeStatus() {
    this.show = !this.show;
  }
}
