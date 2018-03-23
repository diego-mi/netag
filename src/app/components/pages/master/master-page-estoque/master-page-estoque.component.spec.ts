import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageEstoqueComponent } from './master-page-estoque.component';

describe('MasterPageEstoqueComponent', () => {
  let component: MasterPageEstoqueComponent;
  let fixture: ComponentFixture<MasterPageEstoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageEstoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
