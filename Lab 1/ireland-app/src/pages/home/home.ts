import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UlsterPage } from './../ulster/ulster';
import { MunsterPage } from './../munster/munster';
import { ConnaughtPage } from './../connaught/connaught';
import { LeinsterPage } from './../leinster/leinster';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openUlster() {
    this.navCtrl.push(UlsterPage);
  }

  openMunster() {
    this.navCtrl.push(MunsterPage)
  }

  openConnaught() {
    this.navCtrl.push(ConnaughtPage);
  }

  openLeinster() {
    this.navCtrl.push(LeinsterPage);
  }

}
