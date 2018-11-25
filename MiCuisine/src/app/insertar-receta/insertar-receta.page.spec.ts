import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarRecetaPage } from './insertar-receta.page';

describe('InsertarRecetaPage', () => {
  let component: InsertarRecetaPage;
  let fixture: ComponentFixture<InsertarRecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarRecetaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
