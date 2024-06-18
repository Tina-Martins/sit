import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/models/Usuario';
import { UsuarioEscopos } from 'src/models/enums/UsuarioEnums';

@Component({
  selector: 'app-janela-editar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './janela-editar-usuario.component.html',
  styleUrls: ['./janela-editar-usuario.component.scss']
})
export class JanelaEditarUsuarioComponent {
  @Input() usuario: Usuario = { nome: '', email: '', escopo: UsuarioEscopos.ADM };
  @Input() usuarioEscopos: UsuarioEscopos[] = [];
  @Output() saveUser = new EventEmitter<Usuario>();

  constructor(public activeModal: NgbActiveModal) {}

  save(): void {
    this.saveUser.emit(this.usuario);
    this.activeModal.close('save');
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}