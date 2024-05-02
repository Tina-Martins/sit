import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrigamentoComponent } from './abrigamento.component';

describe('AbrigamentoComponent', () => {
  let component: AbrigamentoComponent;
  let fixture: ComponentFixture<AbrigamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AbrigamentoComponent]
    });
    fixture = TestBed.createComponent(AbrigamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
