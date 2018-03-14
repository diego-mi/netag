import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageGruposComponent } from './master-page-grupos.component';

describe('MasterPageGruposComponent', () => {
  let component: MasterPageGruposComponent;
  let fixture: ComponentFixture<MasterPageGruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageGruposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
