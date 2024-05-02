import { AcolhimentoStatus } from "../enums/AcolhimentoStatus";
import { AcolhimentoDocumentoTipo } from "../enums/AcolhimentoDocumentoTipo";
import { AcolhimentoRacaCor } from "../enums/AcolhimentoRacaCor";
import { AcolhimentoEscolaridade } from "../enums/AcolhimentoEscolaridade";
import { AcolhimentoOrientacaoSexual } from "../enums/AcolhimentoOrientacaoSexual";
import { AcolhimentoOrigem } from "../enums/AcolhimentoOrigem";
import { AcolhimentoServicoReferencia } from "../enums/AcolhimentoServicoReferencia";


export interface Acolhimento {
  id?: string;
  nome: string;
  demandas: string[];
  status: AcolhimentoStatus;
  dataNascimento?: Date | string;
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
  atualizadoEm?: Date | string;
  regAtivo?: boolean;
}
