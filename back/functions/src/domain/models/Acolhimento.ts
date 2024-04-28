import { FieldValue } from "firebase-admin/firestore";
export interface AcolhimentoData {
    nome: string;
    demandas: string[] | [];
    status: string;
    criadoEm: FieldValue | Date;
    origem?: string;
    atualizadoEm?: FieldValue | Date;
    regAtivo: boolean;
    
    detalhesCadastro?: DetalhesCadastro;
}
export interface Acolhimento extends AcolhimentoData {
    id?: string;
}
export interface DetalhesCadastro {
    dataNascimento?: FieldValue | Date;
    documento?: string;
    documentoTipo?: string;
    documentoEmissor?: string;
    racaCor?: string;
    escolaridade?: string;
    orientacao_sexual?: string;
    qtdfilhos?: number;
    email?: string;
    telefone?: string;
    cidade?: string;
    bairro?: string;
}

export enum AcolhimentoSubcollections {
    DETALHES_CADASTRO = "detalhes_cadastro"
}
