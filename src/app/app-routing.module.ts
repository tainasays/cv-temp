import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPageComponent } from './primeira-page/primeira-page.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContatoComponent } from './contato/contato.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

const routes: Routes = [
  { path: 'primeira-page', loadChildren: () => import('./primeira-page/primeira-page.module').then(m => m.PrimeiraPageModule) },
  { path: "", redirectTo: "primeira-page", pathMatch: 'full'},
  { path: 'formacao', loadChildren: () => import('./formacao/formacao.module').then(m => m.FormacaoModule) },
  { path: 'experiencia', loadChildren: () => import('./experiencia/experiencia.module').then(m => m.ExperienciaModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  { path: "**", component: NaoEncontradaComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

