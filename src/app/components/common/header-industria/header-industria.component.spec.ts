import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIndustriaComponent } from './header-industria.component';

describe('HeaderIndustriaComponent', () => {
  let component: HeaderIndustriaComponent;
  let fixture: ComponentFixture<HeaderIndustriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderIndustriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
