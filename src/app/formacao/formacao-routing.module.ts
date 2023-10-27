import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormacaoComponent } from './formacao.component';

const routes: Routes = [{ path: '', component: FormacaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormacaoRoutingModule { }
