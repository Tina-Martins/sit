import { Acolhimento, AcolhimentoData } from "../../../domain/models/Acolhimento";
import {
  OrderByParam,
  PaginatedQueryResponse,
  PaginationOptions,
  QueryParam,
} from "../../../utils/QueryUtils";

export interface IAcolhimentoRepository {
  findByFilter(
    queryParams: QueryParam[],
    orderByParams: OrderByParam[],
    paginationOptions: PaginationOptions
  ): Promise<PaginatedQueryResponse<Acolhimento>>;

  findById(id: string): Promise<Acolhimento | null>;

  save(acolhimento: AcolhimentoData): Promise<Acolhimento| null>;

  update(id: string, body: Partial<Acolhimento>): Promise<Acolhimento | null>;

  delete(id: string): Promise<void>;
}
