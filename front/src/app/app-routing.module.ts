import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseDeDadosComponent } from './base-de-dados/base-de-dados.component';
import { PageNotFoundComponent } from './misc/page-not-found/page-not-found.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';

const routes: Routes = [
  { path: 'database', component: BaseDeDadosComponent },
  { path: 'calendar', component: CalendarioComponent },
  { path: 'settings', component: ConfiguracoesComponent },

  { path: '', redirectTo: 'database', pathMatch: 'full' }, // default route
  { path: '**', component: PageNotFoundComponent }, // wildcard route for 404 not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
