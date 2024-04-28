
export enum AcolhimentoStatus {
    ATIVO = "ativo",
    ENCERRADO = "encerrado",
    ENCAMINHADO = "encaminhado"
}

export enum AcolhimentoDemandas {
    PSICOLOGIA = "psicologia",
    JURIDICO = "juridico",
    ASSISTENCIA_SOCIAL = "assistenciaSocial",
    ABRIGAMENTO = "abrigamento",
}

export enum AcolhimentoServicoReferencia {
    BEM_VINDA = "bemVinda",
    CRAS = "cras",
    CREAS = "creas",
    CENTRO_DE_SAUDE = "centroDeSaude",
    HOSPITAL = "hospital",
    CAO_VD_MPMG = "caoVdMpmg",
    CERNA = "cerna",
    CASA_DA_MULHER_MINEIRA = "casaDaMulherMineira",
    DEAM = "deam",
    GUARDA_MUNICIPAL = "guardaMunicipal",
    POLICIA_MILITAR = "policiaMilitar",
}

export enum AcolhimentoOrigem {
    DEMANDA_ESPONTANEA = "demandaEspontanea",
    REDE_DE_ATENDIMENTO = "redeDeAtendimento",
}

export enum AcolhimentoDocumentoTipo {
    RG = "rg",
    CPF = "cpf",
    CNH = "cnh"
}

export enum AcolhimentoRacaCor {
    PRETA = "preta",
    PARDA = "parda",
    BRANCA = "branca",
    INDIGENA = "indigena",
    AMARELA = "amarela",
    QUILOMBOLA = "quilombola"
}

export enum AcolhimentoEscolaridade {
    NAO_POSSUI = "naoPossui",
    FUNDAMENTAL = "fundamental",
    MEDIO = "medio",
    SUPERIOR = "superior",
    POS_GRADUACAO = "posGraduacao",
    MESTRADO = "mestrado",
    DOUTORADO = "doutorado"
}

export enum AcolhimentoOrientationSexual {
    HETEROSEXUAL = "heterosexual",
    HOMOSSEXUAL = 'homossexual',
    BISEXUAL = 'bisexual',
    PANSEXUAL = 'pansexual',
    ASSEXUAL = 'assexual',
    OUTRA = 'outra'
}

export enum AcolhimentoSexo {
    FEMININO = "feminino",
    MASCULINO = "masculino",
    INTERSEXO = "intersexo"
}

export enum Nacionalidade {
    BRASILEIRA = "brasileira",
    ESTRANGEIRA = "estrangeira"
}

export enum AcolhimentoReligiao {
    NAO_POSSUI = "naoPossui",
    CATOLICISMO = "catolicismo",
    EVANGELICA = "evangelica",
    ESPIRITISMO = "espiritismo",
    AFRO_BRASILEIRA = "afro-brasileira",
    OUTRA = "outra"
}