import { Injectable } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';
import { QueryOptions, QueryParam } from 'src/models/QueryOptions';
import { ApiService } from './api.service';
import { AcolhimentoDemandas, AcolhimentoStatus } from 'src/models/enums/AcolhimentoEnums';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AcolhimentosService {
  private lastDocRef: string | null = null;

  constructor(private apiService: ApiService, private router: Router) { }

  public async fetchAcolhimentos(searchName: string, searchStatus: string | '', searchDemanda: string | ''): Promise<Array<Acolhimento>> {
    let queryOptions: QueryOptions = {};
    let queryParams: QueryParam[] = [];

    if (searchName) {
      queryParams.push({ field: 'nome', operator: '==', value: searchName });
    }

    if (searchStatus) {
      queryParams.push({ field: 'status', operator: '==', value: searchStatus });
    }

    if (searchDemanda) {
      queryParams.push({ field: 'demandas', operator: 'array-contains', value: searchDemanda });
    }

    if (queryParams.length > 0) {
      queryOptions.filters = queryParams;
    }

    let result = await this.apiService.fetchAcolhimentos(queryOptions);

    console.info("Sucessfully fetched " + result.data.length + " acolhimentos:");
    console.info(result.data);

    return result.data;
  }

  public async getAcolhimentosWithDemanda(demanda: AcolhimentoDemandas): Promise<Array<Acolhimento>>{
    let query_params: QueryParam[] = [{field: "demandas", operator: "array-contains", value: demanda}]
    let queryOptions: QueryOptions = { filters: query_params }

    let result = await this.apiService.fetchAcolhimentos(queryOptions);
    this.lastDocRef = result.lastDocRef || null;
    return result.data;
  }


}
