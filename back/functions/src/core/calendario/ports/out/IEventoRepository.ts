
import { Evento } from "../../domain/entities/Evento";
import { PaginatedQueryResponse, QueryOptions } from "../../../../utils/QueryUtils";

export interface IEventoRepository {
  list(queryOptions: QueryOptions): Promise<PaginatedQueryResponse<Evento>>;

  findById(id: string): Promise<Evento>;

  save(evento: Evento): Promise<Evento>;

  update(id: string, body: Partial<Evento>): Promise<Evento>;

  delete(id: string): Promise<void>;
}
  