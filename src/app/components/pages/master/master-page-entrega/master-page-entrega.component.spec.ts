import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageEntregaComponent } from './master-page-entrega.component';

describe('MasterPageEntregaComponent', () => {
  let component: MasterPageEntregaComponent;
  let fixture: ComponentFixture<MasterPageEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
