import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-swiper-card',
  templateUrl: './swiper-card.component.html',
  styleUrls: ['./swiper-card.component.scss'],
})
export class SwiperCardComponent implements OnInit {
  @Input() imageSrc: string | undefined;
  @Input() title: string | undefined;
  @Input() tags: string[] | undefined;

  constructor() { }

  ngOnInit() { }
}