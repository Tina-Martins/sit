import {
  AcolhimentoDocumentoTipo,
  AcolhimentoEscolaridade,
  AcolhimentoOrientacaoSexual,
  AcolhimentoOrigem,
  AcolhimentoRacaCor,
  AcolhimentoServicoReferencia,
  AcolhimentoStatus,
} from "./enums/AcolhimentoEnums";

export interface Acolhimento {
  id?: string;
  nome: string;
  demandas: string[];
  status: AcolhimentoStatus;
  dataNascimento?: Date | string;
  descricao?: string;
  documento?: string;
  documentoTipo?: AcolhimentoDocumentoTipo;
  documentoEmissor?: string;
  racaCor?: AcolhimentoRacaCor;
  escolaridade?: AcolhimentoEscolaridade;
  orientacaoSexual?: AcolhimentoOrientacaoSexual;
  qtdfilhos?: number;
  email?: string;
  telefone?: string;
  cidade?: string;
  bairro?: string;
  origem?: AcolhimentoOrigem;
  servicoReferencia?: AcolhimentoServicoReferencia;
  criadoEm?: Date | string;
  criadoPor?: string;
  atualizadoEm?: Date | string;
  atualizadoPor?: string;
  excluidoEm?: Date | string;
  excluidoPor?: string;
  regAtivo?: boolean;
}

