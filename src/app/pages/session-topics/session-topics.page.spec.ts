import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionTopicsPage } from './session-topics.page';
import { waitForAsync } from '@angular/core/testing';

describe('SessionTopicsPage', () => {
  let component: SessionTopicsPage;
  let fixture: ComponentFixture<SessionTopicsPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(SessionTopicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
