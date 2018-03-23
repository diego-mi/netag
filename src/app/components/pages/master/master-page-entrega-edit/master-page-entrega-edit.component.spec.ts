import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageEntregaEditComponent } from './master-page-entrega-edit.component';

describe('MasterPageEntregaEditComponent', () => {
  let component: MasterPageEntregaEditComponent;
  let fixture: ComponentFixture<MasterPageEntregaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageEntregaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageEntregaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
