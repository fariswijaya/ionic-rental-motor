import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListuserPage } from './listuser';

@NgModule({
  declarations: [
    ListuserPage,
  ],
  imports: [
    IonicPageModule.forChild(ListuserPage),
  ],
})
export class ListuserPageModule {}
