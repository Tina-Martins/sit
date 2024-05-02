import { DemandaStatus } from "../enums/DemandaStatus";

export interface Demanda {
  id?: string;
  tipo: string;
  status: DemandaStatus;
  acolhimentoId: string;
  usuarioId?: string;
  usuarioNome?: string;
  criadoEm: Date | string;
  atualizadoEm: Date | string;
  regAtivo: boolean;
}
