import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardsComponentsModule } from "../../components/components.module";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CardsComponentsModule],
})
export class Tab1Page {
  constructor() { }
}
