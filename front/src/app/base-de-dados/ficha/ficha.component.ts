import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Acolhimento } from 'src/models/Acolhimento';
import { StateService } from 'src/services/state.service';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit{
  protected acolhimento: Acolhimento | undefined;
  protected isComplete: boolean | undefined;
  
  constructor(private router: Router, private acolhimentoService: StateService) { }

  async ngOnInit() {
    this.acolhimento = this.acolhimentoService.getCurrentAcolhimento();
    this.isComplete = this.isCadastroComplete();
  }

  private isCadastroComplete(): boolean {
    const keys = Object.keys(this.acolhimento!) as (keyof Acolhimento)[];
  
    for (let key of keys) {
      if (this.acolhimento![key] === undefined) {
        return false;
      }
    }

    return true;
  }

  protected openDemanda(demanda: string){
    console.log("AAA")
  }
  
}
