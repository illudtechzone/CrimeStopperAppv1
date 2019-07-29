import { ComponentModule } from './../../components/component.module';
import { AddContactComponent } from './../../components/add-contact/add-contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlertSettingsPage } from './alert-settings.page';

const routes: Routes = [
  {
    path: '',
    component: AlertSettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlertSettingsPage],
  entryComponents:[AddContactComponent]
})
export class AlertSettingsPageModule {}
