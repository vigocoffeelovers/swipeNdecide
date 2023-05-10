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

    options = [
        { imageSrc: "assets/images/default-card-image.png", title: "Option 1", tags: ["tag1", "tag2", "tag3"] },
        { imageSrc: "assets/images/default-card-image.png", title: "Option 2", tags: ["tag1", "tag2", "tag3"] },
        { imageSrc: "assets/images/default-card-image.png", title: "Option 3", tags: ["tag1", "tag2", "tag3"] },
        { imageSrc: "assets/images/default-card-image.png", title: "Option 4", tags: ["tag1", "tag2", "tag3"] },
        { imageSrc: "assets/images/default-card-image.png", title: "Option 5", tags: ["tag1", "tag2", "tag3"] },
    ];

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.initializeSwiper();
    }

    initializeSwiper() {
        const swiperEl = document.querySelector('swiper-container');
        swiperEl!.addEventListener('swiper-slidenexttransitionend', (event: any) => this.onSlideNextTransition(event, true));
        swiperEl!.addEventListener('swiper-slideprevtransitionend', (event: any) => this.onSlideNextTransition(event, false));
    }

    /* Swiper EVENTS */

    /**
     * Event will be fired after animation to another slide (next or previous).
     *
     * @param event Event object (event.target.swiper is Swiper instance of this slider).
     * @param next If true then the transition was in next direction, otherwise - in previous direction.
     */
    onSlideNextTransition(event: any, next: boolean) {
        /* Remove the first slide, already voted by the user */
        event.target.swiper.removeSlide(1);
        event.target.swiper.slideTo(1, 0, false);
    }

}
