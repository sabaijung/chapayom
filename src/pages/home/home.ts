import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BeverageServiceProvider } from '../../providers/beverage-service/beverage-service'
import { Menuchas } from '../../models/menuscha';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuChas: Menuchas[];
  sub: Subscription;

  constructor(public navCtrl: NavController, private beverageServiceProvider: BeverageServiceProvider) {
  }

  private getData() {
    this.sub = this.beverageServiceProvider.getAllData().subscribe(
      (menuChas:Menuchas[]) => this.menuChas = menuChas
    );
  }

  ionViewWillEnter() {
    this.getData();
  }

  ionViewWillLeave() {
    this.sub.unsubscribe();
  }
}

