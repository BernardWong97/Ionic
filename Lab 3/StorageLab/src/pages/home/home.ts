import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import {Storage} from '@ionic/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myStatus: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad HomePage');
  }

  updateStatus(){
    this.navCtrl.push("StatusPage");
  }

  ionViewWillEnter(){
    this.storage.get("myStatus")
    .then((data)=>{
      this.myStatus = data;
    })
    .catch((err)=>{
      alert("Error accessing Storage");
    })
  }
}
