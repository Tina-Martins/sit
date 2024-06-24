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
  @Output() saveAssignment = new EventEmitter<Usuario>();
  
  protected selectionIndex: number | undefined;

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
    if(!this.selectionIndex){return;}

    let selectedUsuario = this.usuarios![this.selectionIndex!];
    
    this.saveAssignment.emit(selectedUsuario);
    this.activeModal.close();
  }

}
