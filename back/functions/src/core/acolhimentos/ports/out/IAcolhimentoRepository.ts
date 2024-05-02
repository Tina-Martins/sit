import { Acolhimento } from "../../domain/entities/Acolhimento";
import {
  PaginatedQueryResponse,
  QueryOptions,
} from "../../../../utils/QueryUtils";

export interface IAcolhimentoRepository {
  list(
    queryOptions: QueryOptions
  ): Promise<PaginatedQueryResponse<Acolhimento>>;

  findById(id: string): Promise<Acolhimento>;

  save(acolhimento: Acolhimento): Promise<Acolhimento>;

  update(id: string, body: Partial<Acolhimento>): Promise<Acolhimento>;

  delete(id: string): Promise<void>;
}
