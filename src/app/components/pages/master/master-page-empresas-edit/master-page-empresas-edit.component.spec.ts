import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageEmpresasEditComponent } from './master-page-empresas-edit.component';

describe('MasterPageEmpresasEditComponent', () => {
  let component: MasterPageEmpresasEditComponent;
  let fixture: ComponentFixture<MasterPageEmpresasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageEmpresasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageEmpresasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
