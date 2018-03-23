import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageRecebimentoComponent } from './master-page-recebimento.component';

describe('MasterPageRecebimentoComponent', () => {
  let component: MasterPageRecebimentoComponent;
  let fixture: ComponentFixture<MasterPageRecebimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageRecebimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageRecebimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
