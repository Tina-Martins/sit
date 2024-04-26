import { FieldValue } from "firebase-admin/firestore";
export interface AcolhimentoData {
    nome: string;
    demandas: string[] | [];
    origem: string;
    status: string;
    criado_em: FieldValue | Date;
    atualizado_por?: string;
    atualizado_em?: FieldValue | Date;
    reg_ativo: boolean;
    
    detalhes_cadastro?: DetalhesCadastro;
}
export interface Acolhimento extends AcolhimentoData {
    id?: string;
}
export interface DetalhesCadastro {
    data_nascimento?: FieldValue | Date;
    documento?: string;
    documento_tipo?: string;
    documento_emissor?: string;
    raca_cor?: string;
    escolaridade?: string;
    orientacao_sexual?: string;
    qtd_filhos?: number;
    email?: string;
    telefone?: string;
    cidade?: string;
    bairro?: string;
}
