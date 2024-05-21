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

  private async fetchDemandas(queryOptions?: QueryOptions): Promise<{data: Array<Acolhimento>, lastDocRef?:string}> {
    const query_params = queryOptions ? `?queryOptions=${JSON.stringify(queryOptions)}` : ``;
    let request: string = `${API_URL}/demandas${query_params}`;
    
    const response = await fetch(request);
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: { data: Acolhimento[], lastDocRef?: string } = await response.json(); // 'Blind trust'
    return data;
  }

  public async fetchDemanda(acolhimentoId: string, tipo: string) : Promise<Demanda> {
    // TODO: Implementar
    let placeholder: Demanda = {
      tipo: tipo,
      status: DemandaStatus.EM_ABERTO,
      acolhimentoId: "368dasf",
      criadoEm: new Date(),
      atualizadoEm: new Date(),
      regAtivo: true
    };
    
    return placeholder;
  }
}