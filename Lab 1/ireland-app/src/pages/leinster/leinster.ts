import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeinsterCountiesPage } from '../leinster-counties/leinster-counties';

/**
 * Generated class for the LeinsterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leinster',
  templateUrl: 'leinster.html',
})
export class LeinsterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeinsterPage');
  }

  openLeinsterCounties() {
    this.navCtrl.push(LeinsterCountiesPage);
  }
}
