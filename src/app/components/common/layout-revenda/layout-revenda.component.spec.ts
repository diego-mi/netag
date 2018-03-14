import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRevendaComponent } from './layout-revenda.component';

describe('LayoutRevendaComponent', () => {
  let component: LayoutRevendaComponent;
  let fixture: ComponentFixture<LayoutRevendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutRevendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutRevendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
