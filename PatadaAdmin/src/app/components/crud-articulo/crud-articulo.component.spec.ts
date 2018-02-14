import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudArticuloComponent } from './crud-articulo.component';

describe('CrudArticuloComponent', () => {
  let component: CrudArticuloComponent;
  let fixture: ComponentFixture<CrudArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
