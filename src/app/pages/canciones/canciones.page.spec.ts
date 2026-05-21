import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cancionsPage } from './cancions.page';

describe('cancionsPage', () => {
  let component: cancionsPage;
  let fixture: ComponentFixture<cancionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(cancionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
