export interface Usuario {
  id?: string;
  nome: string;
  email: string;
  escopos: string[];
  criadoEm: Date | string;
  atualizadoEm: Date | string;
  regAtivo: boolean;
}
