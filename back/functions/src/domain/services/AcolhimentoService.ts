import { IAcolhimentoService } from "../interfaces/IAcolhimentoService";
import { Acolhimento } from "../models/Acolhimento";
import { IAcolhimentoRepository } from "../../infra/persistence/interfaces/IAcolhimentoRepository";
import {
  PaginatedQueryResponse,
  QueryOptions,
} from "../../utils/QueryUtils";

export class AcolhimentoService implements IAcolhimentoService {
  constructor(private repository: IAcolhimentoRepository) {}

  async list(
    queryOptions: QueryOptions
  ): Promise<PaginatedQueryResponse<Acolhimento>> {
    return await this.repository.list(
      queryOptions
    );
  }

  async create(acolhimento: Acolhimento): Promise<Acolhimento> {
    return await this.repository.save(acolhimento);
  }

  async getById(id: string): Promise<Acolhimento> {
    return await this.repository.findById(id);
  }

  async update(
    id: string,
    body: Partial<Acolhimento>
  ): Promise<Acolhimento> {
    return await this.repository.update(id, body);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
