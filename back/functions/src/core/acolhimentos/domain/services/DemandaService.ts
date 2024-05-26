
import { IDemandaService } from "../../ports/in/IDemandaService";
import { IDemandaRepository } from "../../ports/out/IDemandaRepository";
import { Atendimento } from "../entities/Atendimento";
import { Demanda } from "../entities/Demanda";

export class DemandaService implements IDemandaService {
  constructor(private repository: IDemandaRepository) {}

  public async create(demanda: Demanda): Promise<Demanda> {
    return await this.repository.save(demanda);
  }

  public async getById(id: string): Promise<Demanda> {
    return await this.repository.findById(id);
  }

  public async update(id: string, body: Partial<Demanda>): Promise<Demanda> {
    return await this.repository.update(id, body);
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  public async createAtendimento(demandaId: string, atendimentoData: Atendimento): Promise<Atendimento> {
    return await this.repository.createAtendimento(demandaId, atendimentoData);
  }

  public async updateAtendimento(demandaId: string, atendimentoId: string, atendimentoData: Partial<Atendimento>): Promise<Atendimento> {
    return await this.repository.updateAtendimento(demandaId, atendimentoId, atendimentoData);
  }

  public async deleteAtendimento(demandaId: string, atendimentoId: string): Promise<void> {
    await this.repository.deleteAtendimento(demandaId, atendimentoId);
  }
}
  