import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndustriaComponent } from './home-industria.component';

describe('HomeIndustriaComponent', () => {
  let component: HomeIndustriaComponent;
  let fixture: ComponentFixture<HomeIndustriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIndustriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
