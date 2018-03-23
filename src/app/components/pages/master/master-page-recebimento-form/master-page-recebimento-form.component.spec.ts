import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageRecebimentoFormComponent } from './master-page-recebimento-form.component';

describe('MasterPageRecebimentoFormComponent', () => {
  let component: MasterPageRecebimentoFormComponent;
  let fixture: ComponentFixture<MasterPageRecebimentoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageRecebimentoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageRecebimentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
