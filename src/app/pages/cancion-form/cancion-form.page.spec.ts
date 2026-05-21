import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cancionFormPage } from './cancion-form.page';

describe('cancionFormPage', () => {
  let component: cancionFormPage;
  let fixture: ComponentFixture<cancionFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(cancionFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
