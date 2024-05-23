import {
  AcolhimentoDocumentoTipo,
  AcolhimentoEscolaridade,
  AcolhimentoOrientationSexual,
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
  dataNascimento?: string;
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
  criadoEm?: string;
  atualizadoEm?: string;
  regAtivo?: boolean;
}
