import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirAcaoComponent } from './incluir-acao.component';

describe('IncluirAcaoComponent', () => {
  let component: IncluirAcaoComponent;
  let fixture: ComponentFixture<IncluirAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirAcaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
