
import { IAtendimentoService } from "../../ports/in/IAtendimentoService";
import { IAtendimentoRepository } from "../../ports/out/IAtendimentoRepository";
import { Atendimento } from "../entities/Atendimento";

export class AtendimentoService implements IAtendimentoService {
  constructor(private repository: IAtendimentoRepository) {}

  public async create(atendimento: Atendimento): Promise<Atendimento> {
    return await this.repository.save(atendimento);
  }

  public async getById(id: string): Promise<Atendimento> {
    return await this.repository.findById(id);
  }

  public async update(id: string, body: Partial<Atendimento>): Promise<Atendimento> {
    return await this.repository.update(id, body);
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
  