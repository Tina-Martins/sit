import { Demanda } from "../../domain/entities/Demanda";
import {
  PaginatedQueryResponse,
  QueryOptions,
} from "../../../../utils/QueryUtils";
import { Atendimento } from "../../domain/entities/Atendimento";

export interface IDemandaRepository {
  list(queryOptions: QueryOptions): Promise<PaginatedQueryResponse<Demanda>>;

  findById(id: string): Promise<Demanda>;

  save(demanda: Demanda): Promise<Demanda>;

  update(id: string, body: Partial<Demanda>): Promise<Demanda>;

  delete(id: string): Promise<void>;

  createAtendimento(
    demandaId: string,
    atendimentoData: Atendimento
  ): Promise<Atendimento>;

  updateAtendimento(
    demandaId: string,
    atendimentoId: string,
    atendimentoData: Partial<Atendimento>
  ): Promise<Atendimento>;

  deleteAtendimento(demandaId: string, atendimentoId: string): Promise<void>;
}
