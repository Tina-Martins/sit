
import { Evento } from '../../domain/entities/Evento';

export interface IEventoService {
  create(evento: Evento): Promise<Evento>;

  getById(id: string): Promise<Evento>;

  update(id: string, evento: Partial<Evento>): Promise<Evento>;
  
  delete(id: string): Promise<void>;
}
  