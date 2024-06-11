import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/models/Usuario';
import { ApiService } from 'src/services/api.service';
import { StateService } from 'src/services/state.service';

@Component({
  selector: 'app-janela-atribuir-demanda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './janela-atribuir-demanda.component.html',
  styleUrls: ['./janela-atribuir-demanda.component.scss']
})
export class JanelaAtribuirDemandaComponent implements OnInit{
  protected usuarioNome: string | undefined;

  protected usuarios: Array<Usuario> | undefined;
  constructor(public activeModal: NgbActiveModal, protected stateService: StateService, private apiService: ApiService, private router: Router) {}

  async ngOnInit() {
    try{
      let usuarios = await this.apiService.fetchUsuarios();
      this.usuarios = usuarios!;

    }catch(error){
      console.error(error);
      this.router.navigate(['/error']);
    }
  }

  protected save(): void {
    try{
      let currentDemanda = this.stateService.getCurrentAcolhimentoDemanda();
      if(!currentDemanda){ throw new Error("Demanda não encontrada"); }
      if(!this.usuarioNome){ return ;}

      this.apiService.assignDemandaTo(currentDemanda, this.usuarioNome);

    }catch(error){
      console.error(error);
      this.router.navigate(['/error']);
    }

    this.activeModal.close();
  }

}
