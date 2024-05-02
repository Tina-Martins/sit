import { DemandaStatus } from "./Enums/DemandaEnums";

export class Demanda {
  id?: string;
  tipo: string;
  status: DemandaStatus;
  acolhimentoId: string;
  usuarioId?: string;
  usuarioNome?: string;
  criadoEm: Date;
  atualizadoEm: Date;
  regAtivo: boolean;

  constructor(tipo: string, status: DemandaStatus, acolhimentoId: string, criadoEm: Date, atualizadoEm: Date, regAtivo: boolean){
    this.tipo = tipo;
    this.status = status;
    this.acolhimentoId = acolhimentoId;
    this.criadoEm = criadoEm;
    this.atualizadoEm = atualizadoEm;
    this.regAtivo = regAtivo;
  }
}
