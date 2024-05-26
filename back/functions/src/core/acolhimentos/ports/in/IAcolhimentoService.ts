import { Acolhimento } from "../../domain/entities/Acolhimento";

export interface IAcolhimentoService {

  create(acolhimento: Acolhimento): Promise<Acolhimento>;

  getById(id: string): Promise<Acolhimento>;

  update(id: string, body: Partial<Acolhimento>): Promise<Acolhimento>;

  delete(id: string): Promise<void>;
}
