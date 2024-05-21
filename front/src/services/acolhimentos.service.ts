import { Injectable } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';
import { QueryOptions, QueryParam } from 'src/models/QueryOptions';
import { ApiService } from './api.service';
import { AcolhimentoDemandas } from 'src/models/enums/AcolhimentoEnums';

@Injectable({
  providedIn: 'root'
})
export class AcolhimentosService {
  private lastDocRef: string | null = null;

  constructor(private apiService: ApiService) { }

  public async getAcolhimentos(): Promise<Array<Acolhimento>>{
    let queryOptions: QueryOptions = {  }

    let result = await this.apiService.fetchAcolhimentos(queryOptions);
    this.lastDocRef = result.lastDocRef || null;
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
