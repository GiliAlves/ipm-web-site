import { Component } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public isFooter: boolean = false;

  constructor() {}

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    this.isFooter = ev.detail.scrollTop >= 372 ? true : false
  }
}
