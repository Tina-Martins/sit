import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrigamentosComponent } from './abrigamentos.component';

describe('AbrigamentosComponent', () => {
  let component: AbrigamentosComponent;
  let fixture: ComponentFixture<AbrigamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AbrigamentosComponent]
    });
    fixture = TestBed.createComponent(AbrigamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
