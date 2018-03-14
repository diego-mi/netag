import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRevendaComponent } from './home-revenda.component';

describe('HomeRevendaComponent', () => {
  let component: HomeRevendaComponent;
  let fixture: ComponentFixture<HomeRevendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRevendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRevendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
