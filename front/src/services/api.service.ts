import { Injectable } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';
import { QueryOptions } from 'src/models/QueryOptions';

const API_URL = 'http://localhost:5001/tina-martins/us-central1/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }

  public async fetchAcolhimentos(queryOptions?: QueryOptions): Promise<{data: Array<Acolhimento>, lastDocRef?:string}> {
    const query_params = queryOptions ? `?queryOptions=${encodeURIComponent(JSON.stringify(queryOptions))}` : ``;

    const response = await fetch(`${API_URL}/acolhimentos${query_params}`);
  
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: { data: Acolhimento[], lastDocRef?: string } = await response.json(); // 'Blind trust'
    return data;
  }
}