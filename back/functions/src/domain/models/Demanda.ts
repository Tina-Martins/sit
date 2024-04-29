import { FieldValue } from "firebase-admin/firestore";
import { DemandaStatus } from "./Enums/DemandaEnums";

export interface Demanda {
  id?: string;
  tipo: string;
  status: DemandaStatus;
  acolhimentoId: string;
  usuarioId?: string;
  usuarioNome?: string;
  criadoEm: FieldValue | Date;
  atualizadoEm: FieldValue | Date;
  regAtivo: boolean;
}
