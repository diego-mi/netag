import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageFiliaisFormComponent } from './master-page-filiais-form.component';

describe('MasterPageFiliaisFormComponent', () => {
  let component: MasterPageFiliaisFormComponent;
  let fixture: ComponentFixture<MasterPageFiliaisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageFiliaisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageFiliaisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
