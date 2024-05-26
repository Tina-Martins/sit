
import { Atendimento } from '../../domain/entities/Atendimento';

export interface IAtendimentoService {
  create(atendimento: Atendimento): Promise<Atendimento>;

  getById(id: string): Promise<Atendimento>;

  update(id: string, atendimento: Partial<Atendimento>): Promise<Atendimento>;
  
  delete(id: string): Promise<void>;
}
  