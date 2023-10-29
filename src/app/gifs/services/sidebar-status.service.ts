import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarStatusService {
  show: boolean = false;

  changeStatus() {
    this.show = !this.show;
    if (this.show) {
      document.querySelector('html')?.classList.add('overflow-hidden');
    } else {
      document.querySelector('html')?.classList.remove('overflow-hidden');
    }
  }
}
