import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeinsterCountiesPage } from './leinster-counties';

@NgModule({
  declarations: [
    LeinsterCountiesPage,
  ],
  imports: [
    IonicPageModule.forChild(LeinsterCountiesPage),
  ],
})
export class LeinsterCountiesPageModule {}
