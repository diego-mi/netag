import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterModalFiltrosComponent } from './master-modal-filtros.component';

describe('MasterModalFiltrosComponent', () => {
  let component: MasterModalFiltrosComponent;
  let fixture: ComponentFixture<MasterModalFiltrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterModalFiltrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterModalFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
