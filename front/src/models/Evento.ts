export interface Evento {
  id?: string;
  titulo: string;
  descricao?: string;
  data: Date;
  horaInicio?:Date;
  horaFim?: Date;
  diaTodo: boolean;
  local?: string;
  criadoEm: Date;
  atualizadoEm:Date;
  regAtivo: boolean;
}
