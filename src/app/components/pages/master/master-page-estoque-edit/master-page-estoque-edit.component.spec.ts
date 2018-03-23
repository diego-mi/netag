import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageEstoqueEditComponent } from './master-page-estoque-edit.component';

describe('MasterPageEstoqueEditComponent', () => {
  let component: MasterPageEstoqueEditComponent;
  let fixture: ComponentFixture<MasterPageEstoqueEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageEstoqueEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageEstoqueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
