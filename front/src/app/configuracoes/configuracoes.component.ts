import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/models/Usuario';
import { UsuarioEscopos } from 'src/models/enums/UsuarioEnums';
import { ApiService } from 'src/services/api.service';
import { JanelaEditarUsuarioComponent } from './janela-editar-usuario/janela-editar-usuario.component';

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule],
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {
  protected users: Usuario[] = [];
  protected usuarioEscopos = Object.values(UsuarioEscopos);
  protected newUser: Usuario = {
    nome: '',
    email: '',
    escopo: UsuarioEscopos.ADM // Default escopo
  };
  protected selectedUser: Usuario | undefined;

  constructor(private apiService: ApiService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  private fetchUsers(): void {
    this.apiService.fetchUsuarios()
      .then(users => this.users = users)
      .catch(error => console.error(error));
  }

  protected openAddUserModal(): void {
    const modalRef = this.modalService.open(JanelaEditarUsuarioComponent);
    modalRef.componentInstance.usuario = { ...this.newUser }; // Pass a copy of newUser
    modalRef.componentInstance.usuarioEscopos = this.usuarioEscopos;
    modalRef.result.then((result) => {
      if (result === 'save') { // Check if modal was closed with 'save'
        this.addUser();
      }
    });
  }

  protected addUser(): void {
    this.apiService.createUsuario(this.newUser)
      .then(() => {
        this.fetchUsers();
      })
      .catch(error => console.error(error));
  }

  protected openEditUserModal(user: Usuario): void {
    const modalRef = this.modalService.open(JanelaEditarUsuarioComponent);
    modalRef.componentInstance.usuario = { ...user }; // Pass a copy of user data
    modalRef.componentInstance.usuarioEscopos = this.usuarioEscopos;
    modalRef.result.then((result) => {
      if (result === 'save') {
        this.updateUser();
      }
    });
  }

  protected updateUser(): void { // No need for modal parameter anymore
    if (this.selectedUser) {
      this.apiService.updateUsuario(this.selectedUser)
        .then(() => {
          this.fetchUsers();
        })
        .catch(error => console.error(error));
    }
  }

  protected deleteUser(user: Usuario): void {
    this.selectedUser = user;
    try{
      this.apiService.deleteUsuario(user.id!)
        .then(() => {
          this.fetchUsers();
        })
        .catch(error => console.error(error));
    }catch(error){
      console.error(error);
    }
  }
}