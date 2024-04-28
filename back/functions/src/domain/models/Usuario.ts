import { FieldValue } from 'firebase-admin/firestore';

export interface Usuario {
    id?: string;
    nome: string;
    email: string;
    escopos: string[];
    criadoEm: FieldValue | Date;
    atualizadoEm: FieldValue | Date;
    regAtivo: boolean;
}