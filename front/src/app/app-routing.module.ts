import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseDeDadosComponent } from './base-de-dados/base-de-dados.component';
import { PageNotFoundComponent } from './misc/page-not-found/page-not-found.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { VisaoGeralComponent } from './base-de-dados/tabelas/visao-geral/visao-geral.component';
import { PsicologiaComponent } from './base-de-dados/tabelas/psicologia/psicologia.component';
import { JuridicoComponent } from './base-de-dados/tabelas/juridico/juridico.component';
import { ServicoSocialComponent } from './base-de-dados/tabelas/servico-social/servico-social.component';
import { AbrigamentosComponent } from './base-de-dados/tabelas/abrigamentos/abrigamentos.component';
import { NovoCadastroComponent } from './base-de-dados/novo-cadastro/novo-cadastro.component';
import { ErrorComponent } from './error/error/error.component';

const routes: Routes = [
  { path: 'base-de-dados', component: BaseDeDadosComponent , children: [
    {path: 'visao-geral', component: VisaoGeralComponent},
    {path: 'psicologia', component: PsicologiaComponent},
    {path: 'juridico', component: JuridicoComponent},
    {path: 'servico-social', component: ServicoSocialComponent},
    {path: 'abrigamentos', component: AbrigamentosComponent},
    {path: '', redirectTo: 'visao-geral', pathMatch: 'full'}
  ]},
  { path:'novo-cadastro', component: NovoCadastroComponent },
  
  { path: 'calendario', component: CalendarioComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },

  { path: '', redirectTo: 'base-de-dados', pathMatch: 'full' }, // default route
  {path: 'error', component: ErrorComponent},
  { path: '**', component: PageNotFoundComponent }, // wildcard route for 404 not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
