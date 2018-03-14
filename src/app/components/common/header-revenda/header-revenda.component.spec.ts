import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRevendaComponent } from './header-revenda.component';

describe('HeaderRevendaComponent', () => {
  let component: HeaderRevendaComponent;
  let fixture: ComponentFixture<HeaderRevendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRevendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRevendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
