import {
  OrderByParam,
  PaginatedQueryResponse,
  PaginationOptions,
  QueryParam,
} from "../../utils/QueryUtils";
import { Acolhimento } from "../models/Acolhimento";

export interface IAcolhimentoService {
  getByFilter(
    queryParams: QueryParam[],
    orderByParams: OrderByParam[],
    paginationOptions: PaginationOptions
  ): Promise<PaginatedQueryResponse<Acolhimento>>;

  create(acolhimento: Acolhimento): Promise<Acolhimento>;

  getById(id: string): Promise<Acolhimento | null>;

  update(id: string, body: Partial<Acolhimento>): Promise<Acolhimento | null>;

  delete(id: string): Promise<void>;
}
