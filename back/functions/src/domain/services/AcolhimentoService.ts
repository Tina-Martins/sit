import { IAcolhimentoService } from "../interfaces/IAcolhimentoService";
import { Acolhimento } from "../models/Acolhimento";
import { IAcolhimentoRepository } from "../../infra/persistence/interfaces/IAcolhimentoRepository";

export class AcolhimentoService implements IAcolhimentoService {
    constructor(private repository: IAcolhimentoRepository) {}

    async create(acolhimento: Acolhimento): Promise<Acolhimento> {
        return await this.repository.save(acolhimento);
    }

    async getAll(): Promise<Acolhimento[]> {
        return await this.repository.findAll();
    }

    async getById(id: string): Promise<Acolhimento | null> {
        return await this.repository.findById(id);
    }

    async getByNome(nome: string): Promise<Acolhimento | null> {
        return await this.repository.findByNome(nome);
    }

    async getByTipoDemanda(tipoDemanda: string): Promise<Acolhimento[] | null> {
        return await this.repository.findByTipoDemanda(tipoDemanda);
    }

    async update(id: string, body: Partial<Acolhimento>): Promise<Acolhimento | null> {
        return await this.repository.update(id, body);
    }
}
