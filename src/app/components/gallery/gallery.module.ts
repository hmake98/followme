import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GalleryComponent } from './gallery.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [GalleryComponent],
    exports: [GalleryComponent]
})
export class GalleryModule { }
