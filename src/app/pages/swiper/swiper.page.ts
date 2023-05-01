import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
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
export class SwiperPage implements OnInit, AfterViewInit {

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.initializeSwiper();
    }

    initializeSwiper() {
        const swiperEl = document.querySelector('swiper-container');
        swiperEl!.addEventListener('swiper-slidenexttransitionend', (event: any) => this.onSlideNextTransitionStart(event));
        swiperEl!.addEventListener('swiper-slideprevtransitionend', (event: any) => this.onSlidePrevTransitionEnd(event));
    }

    /* Swiper EVENTS */

    /**
     * Event will be fired after animation to next slide
     */
    onSlideNextTransitionStart(event: any) {
        console.log('onSlideNextTransitionStart');
    }

    /**
     * Event will be fired previous animation to next slide
     */
    onSlidePrevTransitionEnd(event: any) {
        console.log('onSlidePrevTransitionEnd');
    }

}
