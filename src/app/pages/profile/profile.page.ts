import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userPhotos: string[];

  constructor(public actionSheetController: ActionSheetController, private router: Router) {
    this.userPhotos = [
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1641900155667-80fabfe1f42b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1642880384673-e19470d28e5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1626685605354-7826ab228298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1642697395496-b3e09bd8aac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
    ];
  }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Settings',
        role: 'destructive',
        icon: 'settings-outline',
        id: 'setting-button',
        handler: () => {
          this.router.navigateByUrl('/tabs/settings');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}
