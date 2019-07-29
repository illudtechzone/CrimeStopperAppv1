import { AddContactComponent } from './add-contact/add-contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PostAlertComponent } from './post-alert/post-alert.component';
import { CreateComplaintComponent } from './create-complaint/create-complaint.component';

@NgModule({
  imports: [ CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    PostAlertComponent,
    CreateComplaintComponent,
    AddContactComponent
  ],
  exports:[PostAlertComponent,CreateComplaintComponent,AddContactComponent]
})
export class ComponentModule { }
