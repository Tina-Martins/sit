export class Atendimento {
  id?: string;
  data: Date;
  registro: string;
  criadoEm: Date;
  atualizadoEm: Date;
  regAtivo: boolean;

  constructor(data: Date, registro: string, criadoEm:Date, atualizadoEm:Date, regAtivo:boolean){
    this.data = data;
    this.registro = registro;
    this.criadoEm = criadoEm;
    this.atualizadoEm = atualizadoEm;
    this.regAtivo = regAtivo;
  }
}

