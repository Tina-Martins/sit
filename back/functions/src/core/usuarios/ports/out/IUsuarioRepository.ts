import { Usuario } from "../../domain/entities/Usuario";
import {
  PaginatedQueryResponse,
  QueryOptions,
} from "../../../../utils/QueryUtils";

export interface IUsuarioRepository {
  list(
    queryOptions: QueryOptions
  ): Promise<PaginatedQueryResponse<Usuario>>;

  findById(id: string): Promise<Usuario>;

  save(Usuario: Usuario): Promise<Usuario>;

  update(id: string, body: Partial<Usuario>): Promise<Usuario>;

  delete(id: string): Promise<void>;
}
