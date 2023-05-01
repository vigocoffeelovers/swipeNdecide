import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

/* CARDS MODULE */
import { SwiperCardComponent } from "./cards/swiper-card/swiper-card.component";
import { TopicListCardComponent } from "./cards/topic-list-card/topic-list-card.component";

@NgModule({
    declarations: [
        SwiperCardComponent,
        TopicListCardComponent,
    ],
    exports: [
        SwiperCardComponent,
        TopicListCardComponent,
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