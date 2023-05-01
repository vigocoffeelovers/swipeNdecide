import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwiperPage } from './swiper.page';
import { waitForAsync } from '@angular/core/testing';

describe('SwiperPage', () => {
  let component: SwiperPage;
  let fixture: ComponentFixture<SwiperPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(SwiperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
