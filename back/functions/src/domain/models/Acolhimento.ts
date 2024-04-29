import { FieldValue } from "firebase-admin/firestore";
import {
  AcolhimentoDocumentoTipo,
  AcolhimentoEscolaridade,
  AcolhimentoOrientationSexual,
  AcolhimentoOrigem,
  AcolhimentoRacaCor,
  AcolhimentoServicoReferencia,
  AcolhimentoStatus,
} from "./Enums/AcolhimentoEnums";
export interface Acolhimento {
  id?: string;
  nome: string;
  demandas: string[] | [];
  status: AcolhimentoStatus;
  dataNascimento?: FieldValue | Date;
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
  criadoEm: FieldValue | Date;
  atualizadoEm?: FieldValue | Date;
  regAtivo: boolean;
}
