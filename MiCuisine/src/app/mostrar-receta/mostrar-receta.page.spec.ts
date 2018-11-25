import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRecetaPage } from './mostrar-receta.page';

describe('MostrarRecetaPage', () => {
  let component: MostrarRecetaPage;
  let fixture: ComponentFixture<MostrarRecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarRecetaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
