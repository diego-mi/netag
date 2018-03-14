import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutProdutorComponent } from './layout-produtor.component';

describe('LayoutProdutorComponent', () => {
  let component: LayoutProdutorComponent;
  let fixture: ComponentFixture<LayoutProdutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutProdutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
