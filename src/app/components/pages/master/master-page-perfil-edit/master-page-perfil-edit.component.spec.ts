import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPagePerfilEditComponent } from './master-page-perfil-edit.component';

describe('MasterPagePerfilEditComponent', () => {
  let component: MasterPagePerfilEditComponent;
  let fixture: ComponentFixture<MasterPagePerfilEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPagePerfilEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPagePerfilEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
