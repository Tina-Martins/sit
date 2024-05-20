import { Injectable } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';
import { QueryOptions } from 'src/models/QueryOptions';
import { ApiService } from './api.service';

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


}
