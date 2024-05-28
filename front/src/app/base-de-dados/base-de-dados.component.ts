import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AcolhimentoDemandas, AcolhimentoStatus } from 'src/models/enums/AcolhimentoEnums';
import { FormsModule } from '@angular/forms';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-base-de-dados',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './base-de-dados.component.html',
  styleUrls: ['./base-de-dados.component.scss']
})
export class BaseDeDadosComponent {
  protected searchName: string = '';
  protected searchStatus: AcolhimentoStatus | '' = '';
  protected searchDemanda: AcolhimentoDemandas | '' = '';

  protected acolhimentoStatus = Object.values(AcolhimentoStatus);
  protected acolhimentoDemandas = Object.values(AcolhimentoDemandas);

  constructor(private searchService: SearchService) {}

  protected updateSearch() {
    this.searchService.updateSearch(this.searchName, this.searchStatus, this.searchDemanda);
  }
}
