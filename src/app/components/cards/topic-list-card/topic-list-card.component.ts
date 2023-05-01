import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-topic-list-card',
  templateUrl: './topic-list-card.component.html',
  styleUrls: ['./topic-list-card.component.scss'],
})
export class TopicListCardComponent {
  @Input() imageSrc: string | undefined;
  @Input() title: string | undefined;
  @Output() swipeStart = new EventEmitter<void>();

  constructor() {}

  onSwipeStart() {
    this.swipeStart.emit();
  }
}