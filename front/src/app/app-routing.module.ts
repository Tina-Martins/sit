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
import { AbrigamentoComponent } from './base-de-dados/ficha/abas-de-demandas/abrigamento/abrigamento.component';

const routes: Routes = [
  { path: 'base-de-dados', component: BaseDeDadosComponent , children: [
    {path: 'visao-geral', component: VisaoGeralComponent},
    {path: 'psicologia', component: PsicologiaComponent},
    {path: 'juridico', component: JuridicoComponent},
    {path: 'servico-social', component: ServicoSocialComponent},
    {path: 'abrigamentos', component: AbrigamentoComponent},
    {path: '', redirectTo: 'visao-geral', pathMatch: 'full'}
  ]},
  
  { path: 'calendario', component: CalendarioComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },

  { path: '', redirectTo: 'base-de-dados', pathMatch: 'full' }, // default route
  { path: '**', component: PageNotFoundComponent }, // wildcard route for 404 not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
