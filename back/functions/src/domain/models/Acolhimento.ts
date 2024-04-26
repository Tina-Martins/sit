import { FieldValue } from "firebase-admin/firestore";

export interface AcolhimentoData {
    nome: string;
    demandas: string[] | [];
    criado_em: FieldValue | Date;
    atualizado_em: FieldValue | Date;
}

export interface Acolhimento extends AcolhimentoData {
    id?: string;
}
