import { AcolhimentoDemandas } from "../enums/AcolhimentoDemanda";
import { DemandaStatus } from "../enums/DemandaStatus";
import { Atendimento } from "./Atendimento";

export interface Demanda {
  id?: string;
  tipo: AcolhimentoDemandas;
  status: DemandaStatus;
  acolhimentoId: string;
  usuarioId?: string;
  usuarioNome?: string;
  criadoEm?: Date | string;
  atualizadoEm?: Date | string;
  criadoPor?: string;
  atualizadoPor?: string;
  excluidoEm?: Date | string;
  excluidoPor?: string;
  regAtivo?: boolean;
  atendimentos?: Atendimento[];
}
