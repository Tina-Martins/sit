import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Demanda } from 'src/models/Demanda';
import { StateService } from 'src/services/state.service';

@Component({
  selector: 'app-ficha-demanda',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ficha-demanda.component.html',
  styleUrls: ['./ficha-demanda.component.scss']
})
export class FichaDemandaComponent implements OnInit {
  protected currentAcolhimentoDemanda!: Demanda;

  protected isDemandaAssigned: boolean = false;

  constructor(private stateService: StateService, private router: Router){}

  ngOnInit(){}

  public async openDemanda(demanda: string){
    try{
      await this.stateService.setCurrentAcolhimentoDemanda(demanda);

      let result = this.stateService.getCurrentAcolhimentoDemanda();
      if(!result){ throw new Error("Demanda não encontrada"); }
      
      this.currentAcolhimentoDemanda = result;
      
      if(this.currentAcolhimentoDemanda.usuarioId && this.currentAcolhimentoDemanda.usuarioNome){
        // Demanda está atribuida a um usuario se e somente se o id e o nome do usuário forem definidos
        // this.isDemandaAssigned = true; // TODO: Uncomment
      }
    
    } catch(error){
      console.error(error);
      this.router.navigate(['/error']);
    }
  }
}
