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
  id?: string;
  nome: string;
  demandas: string[];
  status: AcolhimentoStatus;
  dataNascimento?: Date;
  documento?: string;
  documentoTipo?: AcolhimentoDocumentoTipo;
  documentoEmissor?: string;
  racaCor?: AcolhimentoRacaCor;
  escolaridade?: AcolhimentoEscolaridade;
  orientacaoSexual?: AcolhimentoOrientationSexual;
  qtdfilhos?: number;
  email?: string;
  telefone?: string;
  cidade?: string;
  bairro?: string;
  origem?: AcolhimentoOrigem;
  servicoReferencia?: AcolhimentoServicoReferencia;
  criadoEm?: Date;
  atualizadoEm?: Date;
  regAtivo?: boolean;

  constructor(nome: string, demandas: string[], status: AcolhimentoStatus){
    this.nome = nome;
    this.demandas = demandas;
    this.status = status;
  }
}
