export interface Evento {
  id?: string;
  titulo: string;
  descricao?: string;
  data: Date | string;
  horaInicio?: Date | string;
  horaFim?: Date | string;
  diaTodo: boolean;
  local: string;
  criadoEm: Date | string;
  atualizadoEm: Date | string;
  regAtivo: boolean;
}
