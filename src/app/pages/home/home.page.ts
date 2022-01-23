import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async openActions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Add post',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          this.openCamera();
        }
      }, {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          this.picker();
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  async openCamera() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    console.log(imageUrl);
  }

  async picker() {
    const image = await Camera.pickImages({
      limit: 1,
      quality: 100,
    });

    console.log(image.photos);
  }
}
