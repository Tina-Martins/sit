import { UsuarioEscopos } from "./enums/UsuarioEnums";

export interface Usuario {
  id?: string;
  nome: string;
  email: string;
  escopo: UsuarioEscopos;
  ultimoLogin?: Date | string;
  criadoEm?: Date | string;
  criadoPor?: string;
  atualizadoEm?: Date | string;
  atualizadoPor?: string;
  excluidoEm?: Date | string;
  excluidoPor?: string;
  regAtivo?: boolean;
}