import { Injectable } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';
import { Demanda } from 'src/models/Demanda';
import { QueryOptions } from 'src/models/QueryOptions';
import { DemandaStatus } from 'src/models/enums/DemandaEnums';

const API_URL = 'http://localhost:5001/tina-martins/us-central1/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }

  public async postAcolhimento(acolhimento: Acolhimento): Promise<void>{
    const response = await fetch(`${API_URL}/acolhimentos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(acolhimento),
    })
    
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  public async fetchAcolhimentos(queryOptions?: QueryOptions): Promise<{data: Array<Acolhimento>, lastDocRef?:string}> {
    const query_params = queryOptions ? `?queryOptions=${JSON.stringify(queryOptions)}` : ``;
    let request: string = `${API_URL}/acolhimentos${query_params}`;

    const response = await fetch(request);
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: { data: Acolhimento[], lastDocRef?: string } = await response.json(); // 'Blind trust'
    return data;
  }

  public async fetchDemandas(acolhimentoId: string): Promise<Array<Demanda>> {
    const query_params = `?queryOptions=${JSON.stringify({filters: [{field: 'acolhimentoId', operator: '==', value: acolhimentoId}]})}`;
    let request: string = `${API_URL}/demandas${query_params}`;

    const response = await fetch(request);
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: { data: Demanda[], lastDocRef?: string } = await response.json(); // 'Blind trust'
    return data.data;
  }

  public async fetchDemanda(acolhimentoId: string, tipo: string) : Promise<Demanda | null> {
    let demandas = await this.fetchDemandas(acolhimentoId);

    for (let demanda of demandas) {
      if (demanda.tipo === tipo) {
        return demanda;
      }
    }

    return null;
  }
}