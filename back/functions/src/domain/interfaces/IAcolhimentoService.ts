import { PaginatedQueryResponse, QueryOptions } from "../../utils/QueryUtils";
import { Acolhimento } from "../models/Acolhimento";

export interface IAcolhimentoService {
  list(
    queryOptions: QueryOptions
  ): Promise<PaginatedQueryResponse<Acolhimento>>;

  create(acolhimento: Acolhimento): Promise<Acolhimento>;

  getById(id: string): Promise<Acolhimento>;

  update(id: string, body: Partial<Acolhimento>): Promise<Acolhimento>;

  delete(id: string): Promise<void>;
}
