import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageRecebimentoEditComponent } from './master-page-recebimento-edit.component';

describe('MasterPageRecebimentoEditComponent', () => {
  let component: MasterPageRecebimentoEditComponent;
  let fixture: ComponentFixture<MasterPageRecebimentoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageRecebimentoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageRecebimentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
