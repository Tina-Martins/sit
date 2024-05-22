import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Acolhimento } from 'src/models/Acolhimento';
import 'src/models/enums/AcolhimentoEnums';
import { AcolhimentoDemandas, AcolhimentoDocumentoTipo, AcolhimentoEscolaridade, AcolhimentoOrientationSexual, AcolhimentoOrigem, AcolhimentoRacaCor, AcolhimentoServicoReferencia, AcolhimentoStatus } from 'src/models/enums/AcolhimentoEnums';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-novo-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './novo-cadastro.component.html',
  styleUrls: ['./novo-cadastro.component.scss']
})
export class NovoCadastroComponent {
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
  protected acolhimentoOrientationSexuais = Object.values(AcolhimentoOrientationSexual);

  protected descricao: string = '';

  ngOnInit() {
    // Initialize selectedDemandas with false for each demand
    this.acolhimentoDemandas.forEach(
      (demanda) => (this.selectedDemandas[demanda] = false)
    );
  }

  cancel() {
    // TODO: Implement cancel logic
    console.log('Cancel clicked!');
  }

  save() {
    // Populate acolhimento.demandas based on selectedDemandas
    this.acolhimento.demandas = this.acolhimentoDemandas.filter(
      (demanda) => this.selectedDemandas[demanda]
    );

    // TODO: Implement save logic
    console.log('Save clicked!', this.acolhimento, this.descricao);
  }
}
