import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoSocialComponent } from './servico-social.component';

describe('ServicoSocialComponent', () => {
  let component: ServicoSocialComponent;
  let fixture: ComponentFixture<ServicoSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicoSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
