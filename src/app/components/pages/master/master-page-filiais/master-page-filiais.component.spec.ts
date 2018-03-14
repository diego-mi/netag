import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageFiliaisComponent } from './master-page-filiais.component';

describe('MasterPageFiliaisComponent', () => {
  let component: MasterPageFiliaisComponent;
  let fixture: ComponentFixture<MasterPageFiliaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageFiliaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageFiliaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
