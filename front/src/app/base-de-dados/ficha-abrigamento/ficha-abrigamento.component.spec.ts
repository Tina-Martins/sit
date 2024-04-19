import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaAbrigamentoComponent } from './ficha-abrigamento.component';

describe('FichaAbrigamentoComponent', () => {
  let component: FichaAbrigamentoComponent;
  let fixture: ComponentFixture<FichaAbrigamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FichaAbrigamentoComponent]
    });
    fixture = TestBed.createComponent(FichaAbrigamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
