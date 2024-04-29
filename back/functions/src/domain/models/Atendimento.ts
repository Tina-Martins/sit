import { FieldValue } from "firebase-admin/firestore";

export interface Atendimento {
  id?: string;
  data: FieldValue | Date;
  registro: string;
  criadoEm: FieldValue | Date;
  atualizadoEm: FieldValue | Date;
  regAtivo: boolean;
}
