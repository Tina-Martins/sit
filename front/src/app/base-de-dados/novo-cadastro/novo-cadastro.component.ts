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

  protected cancel() {
    // TODO: Implement cancel logic
    console.log('Cancel clicked!');
  }

  protected save() {
    this.acolhimento.demandas = this.acolhimentoDemandas.filter(
      (demanda) => this.selectedDemandas[demanda]
    );
    
    console.info("Registering acolhimento:")
    console.info(this.acolhimento);

    // fetch(`${API_URL}/acolhimentos`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newAcolhimento),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log('Acolhimento created successfully:', data);
    //     // TODO: Handle success (e.g., display a success message, navigate to another page)
    //   })
    //   .catch((error) => {
    //     console.error('Error creating acolhimento:', error);
    //     // TODO: Handle error (e.g., display an error message)
    //   });
  }
}
