import { ModalController } from '@ionic/angular';
import { AddContactComponent } from './../../components/add-contact/add-contact.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-settings',
  templateUrl: './alert-settings.page.html',
  styleUrls: ['./alert-settings.page.scss'],
})
export class AlertSettingsPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  async presentAddContactModal(){
    const modal = await this.modalController.create({
      component: AddContactComponent,
      cssClass:'half-height'
    });
    return await modal.present();
  }

  
}
