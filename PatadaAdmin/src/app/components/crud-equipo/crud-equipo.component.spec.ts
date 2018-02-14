import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEquipoComponent } from './crud-equipo.component';

describe('CrudEquipoComponent', () => {
  let component: CrudEquipoComponent;
  let fixture: ComponentFixture<CrudEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
