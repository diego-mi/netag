import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageNotificacoesComponent } from './master-page-notificacoes.component';

describe('MasterPageNotificacoesComponent', () => {
  let component: MasterPageNotificacoesComponent;
  let fixture: ComponentFixture<MasterPageNotificacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageNotificacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageNotificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
