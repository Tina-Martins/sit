import { FieldValue } from "firebase-admin/firestore";

export interface Evento {
    id?: string;
    titulo: string;
    descricao?: string;
    data: FieldValue | Date;
    horaInicio?: FieldValue | Date;
    horaFim?: FieldValue | Date;
    diaTodo: boolean;
    local?: string;
    criadoEm: FieldValue | Date;
    atualizadoEm: FieldValue | Date;
    regAtivo: boolean;
}