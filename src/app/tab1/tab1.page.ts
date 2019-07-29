import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { CreateComplaintComponent } from '../components/create-complaint/create-complaint.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController:ModalController) {}

 async createComplaint() {
     const modal = await this.modalController.create({
       component: CreateComplaintComponent,
       componentProps: {
       }
     });
     return await modal.present();
   }

}
