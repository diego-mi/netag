import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageEmpresasComponent } from './master-page-empresas.component';

describe('MasterPageEmpresasComponent', () => {
  let component: MasterPageEmpresasComponent;
  let fixture: ComponentFixture<MasterPageEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
