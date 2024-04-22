import { Timestamp } from "firebase-admin/firestore";

export class Acolhimento {
    constructor(
        public id: string,
        public nome: string,
        public demandas: Array<String>,
        public criado_em: Timestamp,
        public atualizado_em: Timestamp
    ) {}
}