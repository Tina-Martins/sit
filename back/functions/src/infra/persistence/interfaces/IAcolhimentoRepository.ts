import { Acolhimento } from "../../../domain/models/Acolhimento";
import {
  PaginatedQueryResponse,
  QueryOptions
} from "../../../utils/QueryUtils";

export interface IAcolhimentoRepository {
  list(
    queryOptions: QueryOptions
  ): Promise<PaginatedQueryResponse<Acolhimento>>;

  findById(id: string): Promise<Acolhimento | null>;

  save(acolhimento: Acolhimento): Promise<Acolhimento| null>;

  update(id: string, body: Partial<Acolhimento>): Promise<Acolhimento | null>;

  delete(id: string): Promise<void>;
}
