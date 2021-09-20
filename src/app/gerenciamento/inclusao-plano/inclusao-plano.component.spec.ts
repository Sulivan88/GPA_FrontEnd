import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusaoPlanoComponent } from './inclusao-plano.component';

describe('InclusaoPlanoComponent', () => {
  let component: InclusaoPlanoComponent;
  let fixture: ComponentFixture<InclusaoPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InclusaoPlanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusaoPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
