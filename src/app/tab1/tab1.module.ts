import { ComponentModule } from './../components/component.module';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { CreateComplaintComponent } from '../components/create-complaint/create-complaint.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ComponentModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page],
  entryComponents: [CreateComplaintComponent],


})
export class Tab1PageModule {}
