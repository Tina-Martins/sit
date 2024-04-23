export class Acolhimento {
    constructor(
        public id: string,
        public nome: string,
        public demandas: string[],
        public criado_em: Date,
        public atualizado_em: Date
    ) {}
}
