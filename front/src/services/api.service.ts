import { Injectable } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';

const API_URL = 'http://localhost:5001/us-central1/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public async getAcolhimentos(): Promise<Array<Acolhimento>>{
    const response = await fetch(`${API_URL}/acolhimentos`);
    const data = await response.json();
    return data;
  }
}
