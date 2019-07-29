import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-alert',
  templateUrl: './post-alert.component.html',
  styleUrls: ['./post-alert.component.scss'],
})
export class PostAlertComponent implements OnInit {

  constructor(private  modalCtrl:ModalController) { }

  color: string = 'Primary';

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
