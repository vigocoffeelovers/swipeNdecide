import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class Tab1Page {
  constructor() { }
}
