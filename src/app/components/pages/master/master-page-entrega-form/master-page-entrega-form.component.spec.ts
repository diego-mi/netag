import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageEntregaFormComponent } from './master-page-entrega-form.component';

describe('MasterPageEntregaFormComponent', () => {
  let component: MasterPageEntregaFormComponent;
  let fixture: ComponentFixture<MasterPageEntregaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageEntregaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageEntregaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
