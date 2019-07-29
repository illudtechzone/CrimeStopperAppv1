import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostAlertComponent } from '../components/post-alert/post-alert.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: PostAlertComponent
    });
    return await modal.present();
  }
 


}
