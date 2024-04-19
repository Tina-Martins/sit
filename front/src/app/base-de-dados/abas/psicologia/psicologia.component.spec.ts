import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologiaComponent } from './psicologia.component';

describe('PsicologiaComponent', () => {
  let component: PsicologiaComponent;
  let fixture: ComponentFixture<PsicologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PsicologiaComponent]
    });
    fixture = TestBed.createComponent(PsicologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
