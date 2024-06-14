import { Injectable } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';
import { Demanda } from 'src/models/Demanda';
import { Evento } from 'src/models/Evento';
import { QueryOptions } from 'src/models/QueryOptions';
import { Usuario } from 'src/models/Usuario';
import { environment } from 'src/environment';

const API_URL = environment.apiUrl;

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

  public async updateAcolhimento(acolhimento: Acolhimento): Promise<void>{
    const response = await fetch(`${API_URL}/acolhimentos/${acolhimento.id}`, {
      method: 'PATCH',
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

  public async getAcolhimentoById(acolhimentoId: string): Promise<Acolhimento> {
    let request: string = `${API_URL}/acolhimentos/${acolhimentoId}`;

    const response = await fetch(request);
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Acolhimento = await response.json(); // 'Blind trust'
    return data;
  }

  public async updateDemanda(demanda: Demanda): Promise<void>{
    const response = await fetch(`${API_URL}/demandas/${demanda.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(demanda),
    })

    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  public async assignDemandaTo(demanda: Demanda, usuarioNome: string): Promise<void>{
    // TODO: Implementar no back
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

  public async fetchUsuarios(queryOptions?: QueryOptions): Promise<Array<Usuario>> {
    const query_params = queryOptions ? `?queryOptions=${JSON.stringify(queryOptions)}` : ``;
    let request: string = `${API_URL}/usuarios${query_params}`;

    const response = await fetch(request);
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: { data: Usuario[], lastDocRef?: string } = await response.json(); // 'Blind trust'
    return data.data;
  }

  public async postEvento(evento: Evento): Promise<void>{
    const response = await fetch(`${API_URL}/eventos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(evento),
    })

    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  public async fetchEventos(queryOptions?: QueryOptions): Promise<Array<Evento>>{
    const query_params = queryOptions ? `?queryOptions=${JSON.stringify(queryOptions)}` : ``;
    let request: string = `${API_URL}/eventos${query_params}`;

    const response = await fetch(request);
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: { data: Evento[], lastDocRef?: string } = await response.json(); // 'Blind trust'
    return data.data;
  }
}
