import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-topic-list-card',
  templateUrl: './topic-list-card.component.html',
  styleUrls: ['./topic-list-card.component.scss'],
})
export class TopicListCardComponent {
  @Input() imageSrc: string | undefined;
  @Input() title: string | undefined;
  @Output() swipe = new EventEmitter<void>();

  constructor() {}

  /**
   * Emit swipe event when the slider is dragged to the right.
   *
   * When the user slides +50% of the width, the card slides completely to the right so the ratio is -1 and the
   * swiping is considered complete.
   *
   * The ratio is calculated as the distance the slider has moved divided by the width of the slider. The range when the
   * side value is "start" is from 0 (start) to -1 (end).
   *
   * @param slider ion-item-sliding element
   */
  onIonDrag(slider: any) {
    slider.getSlidingRatio().then((ratio: any) => { if (ratio <= -1) this.swipe.emit() } );
  }

}