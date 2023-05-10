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
  @Input() styleCard: string | undefined;  // invisible | visible | finish
  /* Invisible: the first card. Invisible. The user should never reach it. It is used to allow the user to swipe to the left.
   * Visible: normal cards. The user swipes to the right to vote for these card.
   * Finish: the last card. It contains a message to the user to inform him that he has finished the voting.
   */


  constructor() { }

  ngOnInit() { }
}