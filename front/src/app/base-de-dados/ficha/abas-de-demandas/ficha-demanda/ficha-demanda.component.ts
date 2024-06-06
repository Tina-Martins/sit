import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Demanda } from 'src/models/Demanda';
import { DateService } from 'src/services/date.service';
import { StateService } from 'src/services/state.service';
import { JanelaAtribuirDemandaComponent } from './janela-atribuir-demanda/janela-atribuir-demanda.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/services/api.service';

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

  // private demandaAtribuida: Subscription | undefined;

  constructor(private stateService: StateService, private router: Router, private dateService: DateService, private modalService: NgbModal, private apiService: ApiService){}

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
      return this.dateService.makeDisplayableDate(inicioAtendimento);
    }else{
      return "Não iniciado";
    }
  }

  protected openAssignDemandaDialog(): void {
    const modalRef = this.modalService.open(JanelaAtribuirDemandaComponent); // Open the pop-up
  }
}
