import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageExpedicaoComponent } from './master-page-expedicao.component';

describe('MasterPageExpedicaoComponent', () => {
  let component: MasterPageExpedicaoComponent;
  let fixture: ComponentFixture<MasterPageExpedicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageExpedicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageExpedicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
