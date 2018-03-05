import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MunsterPage } from './munster';

@NgModule({
  declarations: [
    MunsterPage,
  ],
  imports: [
    IonicPageModule.forChild(MunsterPage),
  ],
})
export class MunsterPageModule {}
