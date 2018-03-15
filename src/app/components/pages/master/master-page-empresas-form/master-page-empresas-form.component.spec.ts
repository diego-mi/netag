import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageEmpresasFormComponent } from './master-page-empresas-form.component';

describe('MasterPageEmpresasFormComponent', () => {
  let component: MasterPageEmpresasFormComponent;
  let fixture: ComponentFixture<MasterPageEmpresasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageEmpresasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageEmpresasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
