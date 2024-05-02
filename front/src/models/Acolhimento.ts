import {
  AcolhimentoDocumentoTipo,
  AcolhimentoEscolaridade,
  AcolhimentoOrientationSexual,
  AcolhimentoOrigem,
  AcolhimentoRacaCor,
  AcolhimentoServicoReferencia,
  AcolhimentoStatus,
} from "./Enums/AcolhimentoEnums";

export class Acolhimento {
  private id?: string;
  private nome: string;
  private demandas: string[];
  private status: AcolhimentoStatus;
  private dataNascimento?: Date;
  private documento?: string;
  private documentoTipo?: AcolhimentoDocumentoTipo;
  private documentoEmissor?: string;
  private racaCor?: AcolhimentoRacaCor;
  private escolaridade?: AcolhimentoEscolaridade;
  private orientacaoSexual?: AcolhimentoOrientationSexual;
  private qtdfilhos?: number;
  private email?: string;
  private telefone?: string;
  private cidade?: string;
  private bairro?: string;
  private origem?: AcolhimentoOrigem;
  private servicoReferencia?: AcolhimentoServicoReferencia;
  private criadoEm?: Date;
  private atualizadoEm?: Date;
  private regAtivo?: boolean;

  constructor(nome: string, demandas: string[], status: AcolhimentoStatus){
    this.nome = nome;
    this.demandas = demandas;
    this.status = status;
  }
}
