import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageSolicitacoesComponent } from './master-page-solicitacoes.component';

describe('MasterPageSolicitacoesComponent', () => {
  let component: MasterPageSolicitacoesComponent;
  let fixture: ComponentFixture<MasterPageSolicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageSolicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
