import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProdutorComponent } from './home-produtor.component';

describe('HomeProdutorComponent', () => {
  let component: HomeProdutorComponent;
  let fixture: ComponentFixture<HomeProdutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProdutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
