import { Atendimento } from "../../domain/entities/Atendimento";
import {
  PaginatedQueryResponse,
  QueryOptions,
} from "../../../../utils/QueryUtils";

export interface IAtendimentoRepository {
  list(
    queryOptions: QueryOptions
  ): Promise<PaginatedQueryResponse<Atendimento>>;

  findById(id: string): Promise<Atendimento>;

  save(atendimento: Atendimento): Promise<Atendimento>;

  update(id: string, body: Partial<Atendimento>): Promise<Atendimento>;

  delete(id: string): Promise<void>;
}
