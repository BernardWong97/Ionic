import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnaughtCountiesPage } from './connaught-counties';

@NgModule({
  declarations: [
    ConnaughtCountiesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnaughtCountiesPage),
  ],
})
export class ConnaughtCountiesPageModule { }
