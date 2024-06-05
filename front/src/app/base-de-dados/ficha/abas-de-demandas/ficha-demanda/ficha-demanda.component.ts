import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Demanda } from 'src/models/Demanda';
import { DateService } from 'src/services/date.service';
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

  constructor(private stateService: StateService, private router: Router, private dateService: DateService){}

  ngOnInit(){
    try{
      let result = this.stateService.getCurrentAcolhimentoDemanda();
      if(!result){ throw new Error("Demanda não encontrada"); }
      
      this.currentAcolhimentoDemanda = result;
      
      if(this.currentAcolhimentoDemanda.usuarioId && this.currentAcolhimentoDemanda.usuarioNome){
        // Demanda está atribuida a um usuario se e somente se o id e o nome do usuário forem definidos
        this.isDemandaAssigned = true;
      }else{
        this.isDemandaAssigned = false;
      }
    
    } catch(error){
      console.error(error);
      this.router.navigate(['/error']);
    }
  }

  protected getInicioAtendimento(): string{
    if(this.currentAcolhimentoDemanda.atendimentos){
      let inicioAtendimento = this.currentAcolhimentoDemanda.atendimentos[0].data;
      console.log(inicioAtendimento)
      return this.dateService.formatDate(inicioAtendimento);
    }else{
      return "Não iniciado";
    }
  }
}
