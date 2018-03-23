import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageExpedicaoFormComponent } from './master-page-expedicao-form.component';

describe('MasterPageExpedicaoFormComponent', () => {
  let component: MasterPageExpedicaoFormComponent;
  let fixture: ComponentFixture<MasterPageExpedicaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageExpedicaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageExpedicaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
