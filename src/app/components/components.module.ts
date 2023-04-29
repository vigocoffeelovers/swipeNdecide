import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

/* CARDS MODULE */
import { SwiperCardComponent } from "./cards/swiper-card/swiper-card.component";

@NgModule({
  declarations: [
    SwiperCardComponent
  ],
  exports: [
    SwiperCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class CardsComponentsModule { }


/* CONTAINERS MODULE */

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ContainersComponentsModule { }