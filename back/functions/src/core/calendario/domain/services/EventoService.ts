
import { IEventoService } from "../../ports/in/IEventoService";
import { IEventoRepository } from "../../ports/out/IEventoRepository";
import { Evento } from "../entities/Evento";

export class EventoService implements IEventoService {
  constructor(private repository: IEventoRepository) {}

  public async create(evento: Evento): Promise<Evento> {
    return await this.repository.save(evento);
  }

  public async getById(id: string): Promise<Evento> {
    return await this.repository.findById(id);
  }

  public async update(id: string, body: Partial<Evento>): Promise<Evento> {
    return await this.repository.update(id, body);
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
  