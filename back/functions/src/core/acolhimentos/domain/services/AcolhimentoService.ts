import { PaginatedQueryResponse, QueryOptions } from "../../../../utils/QueryUtils";
import { IAcolhimentoService } from "../../ports/in/IAcolhimentoService";
import { IAcolhimentoRepository } from "../../ports/out/IAcolhimentoRepository";
import { Acolhimento } from "../entities/Acolhimento";


export class AcolhimentoService implements IAcolhimentoService {
  constructor(private repository: IAcolhimentoRepository) {}

  public async list(
    queryOptions: QueryOptions
  ): Promise<PaginatedQueryResponse<Acolhimento>> {
    return await this.repository.list(queryOptions);
  }

  public async create(acolhimento: Acolhimento): Promise<Acolhimento> {
    return await this.repository.save(acolhimento);
  }

  public async getById(id: string): Promise<Acolhimento> {
    return await this.repository.findById(id);
  }

  public async update(id: string, body: Partial<Acolhimento>): Promise<Acolhimento> {
    return await this.repository.update(id, body);
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
