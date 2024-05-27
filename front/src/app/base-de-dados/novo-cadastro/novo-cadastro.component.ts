import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Acolhimento } from 'src/models/Acolhimento';
import 'src/models/enums/AcolhimentoEnums';
import { AcolhimentoDemandas, AcolhimentoDocumentoTipo, AcolhimentoEscolaridade, AcolhimentoOrientacaoSexual, AcolhimentoOrigem, AcolhimentoRacaCor, AcolhimentoServicoReferencia, AcolhimentoStatus } from 'src/models/enums/AcolhimentoEnums';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-novo-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './novo-cadastro.component.html',
  styleUrls: ['./novo-cadastro.component.scss']
})
export class NovoCadastroComponent {
  @ViewChild('acolhimentoForm') acolhimentoForm!: NgForm;
  protected tried_submit: boolean = false;
  
  protected acolhimento: Acolhimento = {
    nome: '',
    demandas: [],
    status: AcolhimentoStatus.ATIVO,
  };

  protected acolhimentoDemandas = Object.values(AcolhimentoDemandas);
  protected selectedDemandas: { [key: string]: boolean } = {};

  protected acolhimentoOrigens: string[] = Object.values(AcolhimentoOrigem);
  protected acolhimentoServicosReferencia: string[] = Object.values(AcolhimentoServicoReferencia);
  protected acolhimentoDocumentoTipos = Object.values(AcolhimentoDocumentoTipo);
  protected acolhimentoRacaCores = Object.values(AcolhimentoRacaCor);
  protected acolhimentoEscolaridades = Object.values(AcolhimentoEscolaridade);
  protected acolhimentoOrientacaoSexuais = Object.values(AcolhimentoOrientacaoSexual);

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    // Initialize selectedDemandas with false for each demand
    this.acolhimentoDemandas.forEach(
      (demanda) => (this.selectedDemandas[demanda] = false)
    );
  }

  protected cancel() {
    this.router.navigate(['/']);
  }

  protected isAnyDemandaSelected() {
    for(let demanda in this.selectedDemandas){
      if(this.selectedDemandas[demanda]==true){
        return true;
      }
    }

    return false;
  }

  protected save() {
    this.tried_submit = true;

    if (this.acolhimentoForm.valid) {
      this.acolhimento.demandas = this.acolhimentoDemandas.filter(
        (demanda) => this.selectedDemandas[demanda]
      );
      
      console.info("Registering acolhimento:")
      console.info(this.acolhimento);
  
      this.apiService.postAcolhimento(this.acolhimento)
        .catch((error) => {
          console.error("Error posting acolhimento:");
          console.error(error);
          this.router.navigate(['/error']);
        });
    }else{
      this.acolhimentoForm.control.markAllAsTouched();
    }
    
  }
}
