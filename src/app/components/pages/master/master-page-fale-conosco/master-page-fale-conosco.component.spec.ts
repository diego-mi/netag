import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageFaleConoscoComponent } from './master-page-fale-conosco.component';

describe('MasterPageFaleConoscoComponent', () => {
  let component: MasterPageFaleConoscoComponent;
  let fixture: ComponentFixture<MasterPageFaleConoscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageFaleConoscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageFaleConoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
