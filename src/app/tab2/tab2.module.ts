import { ComponentModule } from './../components/component.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { PostAlertComponent } from '../components/post-alert/post-alert.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ComponentModule,
    ComponentModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page],
  entryComponents:[PostAlertComponent]
})
export class Tab2PageModule {}
