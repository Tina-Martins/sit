import { Component } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';
import { AcolhimentosService } from 'src/services/acolhimentos.service';
import { CommonModule } from '@angular/common';
import { AcolhimentoDemandas } from 'src/models/enums/AcolhimentoEnums';
import { Demanda } from 'src/models/Demanda';
import { ApiService } from 'src/services/api.service';
import { Subscription } from 'rxjs';
import { DateService } from 'src/services/date.service';
import { Router } from '@angular/router';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-servico-social',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servico-social.component.html',
  styleUrls: ['./servico-social.component.scss', '../tabela-base.scss']
})
export class ServicoSocialComponent {
  protected acolhimentos: Array<Acolhimento> | null = null;
  private searchSubscription: Subscription;

  protected acolhimento_demanda: Map<string, Demanda> | null = null;

  constructor(
    private acolhimentosService: AcolhimentosService, 
    protected dateService: DateService, 
    private router: Router, 
    private searchService: SearchService,
    private apiService: ApiService
  ) {
    this.searchSubscription = this.searchService.searchParams$.subscribe({
      next: (params) => {
        this.acolhimentosService.fetchAcolhimentos(params.name, params.status, AcolhimentoDemandas.ASSISTENCIA_SOCIAL)
          .then((acolhimentos) => this.init(acolhimentos))
          .catch((error) => {
            console.error("Error fetching acolhimentos:");
            console.error(error);
            this.router.navigate(['/error']);
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  private async init(acolhimentos: Array<Acolhimento>): Promise<void> {
    this.acolhimentos = acolhimentos;

    let tipo_demanda: AcolhimentoDemandas = AcolhimentoDemandas.ASSISTENCIA_SOCIAL;
    this.acolhimento_demanda = new Map();
    for (let acolhimento of this.acolhimentos) {
      if (!acolhimento.id) {
        console.error("Acolhimento " + acolhimento.id + " não possui id");
        continue;
      }
      
      this.apiService.fetchDemanda(acolhimento.id, tipo_demanda)
        .then(demanda => this.acolhimento_demanda?.set(acolhimento.id!, demanda))
        .catch((error) => {
          console.error("Error fetching demanda for acolhimento " + acolhimento.id);
          console.error(error);
          this.router.navigate(['/error']);
        });
    }
  }
}
