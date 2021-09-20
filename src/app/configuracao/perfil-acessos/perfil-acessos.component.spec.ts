import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAcessosComponent } from './perfil-acessos.component';

describe('PerfilAcessosComponent', () => {
  let component: PerfilAcessosComponent;
  let fixture: ComponentFixture<PerfilAcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAcessosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
