import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutIndustriaComponent } from './layout-industria.component';

describe('LayoutIndustriaComponent', () => {
  let component: LayoutIndustriaComponent;
  let fixture: ComponentFixture<LayoutIndustriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutIndustriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
