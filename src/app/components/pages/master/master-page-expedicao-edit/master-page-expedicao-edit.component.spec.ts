import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageExpedicaoEditComponent } from './master-page-expedicao-edit.component';

describe('MasterPageExpedicaoEditComponent', () => {
  let component: MasterPageExpedicaoEditComponent;
  let fixture: ComponentFixture<MasterPageExpedicaoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageExpedicaoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageExpedicaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
