import { DemandaStatus } from "./enums/DemandaEnums";

export interface Demanda {
  id?: string;
  tipo: string;
  status: DemandaStatus;
  acolhimentoId: string;
  usuarioId?: string;
  usuarioNome?: string;
  criadoEm: Date;
  atualizadoEm: Date;
  regAtivo: boolean;
}
