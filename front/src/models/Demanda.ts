import { DemandaStatus } from "./Enums/DemandaEnums";

export class Demanda {
  private id?: string;
  private tipo: string;
  private status: DemandaStatus;
  private acolhimentoId: string;
  private usuarioId?: string;
  private usuarioNome?: string;
  private criadoEm: Date;
  private atualizadoEm: Date;
  private regAtivo: boolean;

  constructor(tipo: string, status: DemandaStatus, acolhimentoId: string, criadoEm: Date, atualizadoEm: Date, regAtivo: boolean){
    this.tipo = tipo;
    this.status = status;
    this.acolhimentoId = acolhimentoId;
    this.criadoEm = criadoEm;
    this.atualizadoEm = atualizadoEm;
    this.regAtivo = regAtivo;
  }
}
