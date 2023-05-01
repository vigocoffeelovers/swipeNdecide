import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, InfiniteScrollCustomEvent } from '@ionic/angular';
import { CardsComponentsModule } from "../../components/components.module";

@Component({
    selector: 'app-session-topics',
    templateUrl: './session-topics.page.html',
    styleUrls: ['./session-topics.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, CardsComponentsModule]
})
export class SessionTopicsPage implements OnInit {

    topics: string[] = [];

    constructor() { }

    ngOnInit() {
        this.generateItems();
    }

    private generateItems() {
        const count = this.topics.length + 1;
        for (let i = 0; i < 50; i++) {
            this.topics.push(`Item ${count + i}`);
        }
    }

    onIonInfinite(event: any) {
        this.generateItems();
        setTimeout(() => {
            (event as InfiniteScrollCustomEvent).target.complete();
        }, 500);
    }

    onSwipeStart(event: any) {
        console.log('onSwipeStart');
    }

}
