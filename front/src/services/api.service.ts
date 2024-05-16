import { Injectable } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';
import { QueryOptions } from 'src/models/QueryOptions';

const API_URL = 'http://localhost:5001/tina-martins/us-central1/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private acolhimentosLastDocRef: string | null = null;

  constructor() { }

  public async getAcolhimentos(queryOptions?: QueryOptions): Promise<Array<Acolhimento>> {
    const query_params = queryOptions ? 
      `?queryOptions=${encodeURIComponent(JSON.stringify(queryOptions))}&lastDocRef=${this.acolhimentosLastDocRef}` : 
      `?lastDocRef=${this.acolhimentosLastDocRef}`;

    const response = await fetch(`${API_URL}/acolhimentos${query_params}`);
  
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data: { acolhimentos: Acolhimento[], lastDocRef?: string } = await response.json(); // 'Blind trust'
    this.acolhimentosLastDocRef = data.lastDocRef || null;
    return data.acolhimentos;
  }
}