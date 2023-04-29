import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardsComponentsModule } from "../../components/components.module";

@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.page.html',
    styleUrls: ['./swiper.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, CardsComponentsModule]
})
export class SwiperPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
