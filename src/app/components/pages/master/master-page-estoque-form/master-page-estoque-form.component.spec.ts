import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageEstoqueFormComponent } from './master-page-estoque-form.component';

describe('MasterPageEstoqueFormComponent', () => {
  let component: MasterPageEstoqueFormComponent;
  let fixture: ComponentFixture<MasterPageEstoqueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageEstoqueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageEstoqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
