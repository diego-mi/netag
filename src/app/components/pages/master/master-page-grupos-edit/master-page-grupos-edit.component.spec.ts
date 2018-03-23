import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageGruposEditComponent } from './master-page-grupos-edit.component';

describe('MasterPageGruposEditComponent', () => {
  let component: MasterPageGruposEditComponent;
  let fixture: ComponentFixture<MasterPageGruposEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageGruposEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageGruposEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
