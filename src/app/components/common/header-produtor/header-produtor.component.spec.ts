import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProdutorComponent } from './header-produtor.component';

describe('HeaderProdutorComponent', () => {
  let component: HeaderProdutorComponent;
  let fixture: ComponentFixture<HeaderProdutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProdutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
