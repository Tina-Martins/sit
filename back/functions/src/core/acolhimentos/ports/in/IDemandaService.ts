
import { Atendimento } from '../../domain/entities/Atendimento';
import { Demanda } from '../../domain/entities/Demanda';

export interface IDemandaService {
  create(demanda: Demanda): Promise<Demanda>;

  getById(id: string): Promise<Demanda>;

  update(id: string, demanda: Partial<Demanda>): Promise<Demanda>;
  
  delete(id: string): Promise<void>;

  createAtendimento(demandaId: string, atendimentoData: Atendimento): Promise<Atendimento>;

  updateAtendimento(demandaId: string, atendimentoId: string, atendimentoData: Partial<Atendimento>): Promise<Atendimento>;

  deleteAtendimento(demandaId: string, atendimentoId: string): Promise<void>;
}
  