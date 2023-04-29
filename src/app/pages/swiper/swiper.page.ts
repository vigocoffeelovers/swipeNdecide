import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardsComponentsModule } from "../../components/components.module";
import { register } from 'swiper/element/bundle';
register();

@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.page.html',
    styleUrls: ['./swiper.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, CardsComponentsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperPage implements OnInit {

    constructor() { }

    ngOnInit() { }

}
