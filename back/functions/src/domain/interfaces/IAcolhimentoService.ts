import {
  PaginatedQueryResponse,
  QueryOptions
} from "../../utils/QueryUtils";
import { Acolhimento } from "../models/Acolhimento";

export interface IAcolhimentoService {
  list(
    queryOptions: QueryOptions
  ): Promise<PaginatedQueryResponse<Acolhimento>>;

  create(acolhimento: Acolhimento): Promise<Acolhimento | null>;

  getById(id: string): Promise<Acolhimento | null>;

  update(id: string, body: Partial<Acolhimento>): Promise<Acolhimento | null>;

  delete(id: string): Promise<void>;
}
