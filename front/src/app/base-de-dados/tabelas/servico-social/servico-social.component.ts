import { Component } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';
import { AcolhimentosService } from 'src/services/acolhimentos.service';
import { CommonModule } from '@angular/common';
import { AcolhimentoDemandas } from 'src/models/enums/AcolhimentoEnums';
import { Demanda } from 'src/models/Demanda';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-servico-social',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servico-social.component.html',
  styleUrls: ['./servico-social.component.scss', '../tabela-base.scss']
})
export class ServicoSocialComponent {
  protected acolhimentos: Array<Acolhimento> | null = null;
  protected acolhimento_demanda: Map<string, Demanda> | null = null;

  constructor(protected acolhimentosService: AcolhimentosService, private apiService: ApiService) { }

  async ngOnInit() {
    let tipo_demanda: AcolhimentoDemandas = AcolhimentoDemandas.ASSISTENCIA_SOCIAL;

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
