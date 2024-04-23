import { Acolhimento } from "../../../domain/models/Acolhimento";

export interface IAcolhimentoRepository {
    save(acolhimento: Acolhimento): Promise<Acolhimento>;
    findAll(): Promise<Acolhimento[]>;
    findById(id: string): Promise<Acolhimento | null>;
    findByNome(nome: string): Promise<Acolhimento | null>;
    findByTipoDemanda(tipoDemanda: string): Promise<Acolhimento[] | null>;
    update(id: string, body: Partial<Acolhimento>): Promise<Acolhimento | null>;
}