import { Acolhimento } from '../models/Acolhimento';

export interface IAcolhimentoService {
    create(acolhimento: Acolhimento): Promise<Acolhimento>;
    getById(id: string): Promise<Acolhimento | null>;
    getByNome(nome: string): Promise<Acolhimento | null>;
    getByTipoDemanda(tipoDemanda: string): Promise<Acolhimento[] | null>;
}