import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageFiliaisEditComponent } from './master-page-filiais-edit.component';

describe('MasterPageFiliaisEditComponent', () => {
  let component: MasterPageFiliaisEditComponent;
  let fixture: ComponentFixture<MasterPageFiliaisEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageFiliaisEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageFiliaisEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
