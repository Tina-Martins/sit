import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Acolhimento } from 'src/models/Acolhimento';
import { Demanda } from 'src/models/Demanda';
import { ApiService } from 'src/services/api.service';
import { AcolhimentosService } from 'src/services/acolhimentos.service';
import { AcolhimentoDemandas } from 'src/models/enums/AcolhimentoEnums';

@Component({
  selector: 'app-psicologia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './psicologia.component.html',
  styleUrls: ['./psicologia.component.scss', '../tabela-base.scss']
})
export class PsicologiaComponent {
  protected acolhimentos: Array<Acolhimento> | null = null;
  protected acolhimento_demanda: Map<string, Demanda> | null = null;

  constructor(protected acolhimentosService: AcolhimentosService, private apiService: ApiService) { }

  async ngOnInit() {
    let tipo_demanda: AcolhimentoDemandas = AcolhimentoDemandas.PSICOLOGIA;

    this.acolhimentos = await this.acolhimentosService.getAcolhimentosWithDemanda(tipo_demanda);
    this.acolhimento_demanda = new Map();
    for (let acolhimento of this.acolhimentos) {
      if (!acolhimento.id) {
        console.error("Acolhimento " + acolhimento.id + " não possui id");
        continue;
      }
  
      let demanda: Demanda = await this.apiService.fetchDemanda(acolhimento.id, tipo_demanda);
      this.acolhimento_demanda.set(acolhimento.id, demanda);
    }

    console.info("Successfully fetched " + this.acolhimentos.length + " acolhimentos");
  }

}
