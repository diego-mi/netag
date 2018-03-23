import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageGruposFormComponent } from './master-page-grupos-form.component';

describe('MasterPageGruposFormComponent', () => {
  let component: MasterPageGruposFormComponent;
  let fixture: ComponentFixture<MasterPageGruposFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageGruposFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageGruposFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
