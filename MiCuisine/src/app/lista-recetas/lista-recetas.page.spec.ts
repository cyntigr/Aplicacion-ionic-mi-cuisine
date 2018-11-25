import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecetasPage } from './lista-recetas.page';

describe('ListaRecetasPage', () => {
  let component: ListaRecetasPage;
  let fixture: ComponentFixture<ListaRecetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRecetasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRecetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
