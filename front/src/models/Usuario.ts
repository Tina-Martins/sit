export interface Usuario {
  id?: string;
  nome: string;
  email: string;
  escopos: string[];
  criadoEm: Date;
  atualizadoEm: Date;
  regAtivo: boolean;
}
