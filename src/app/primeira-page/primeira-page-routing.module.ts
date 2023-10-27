import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPageComponent } from './primeira-page.component';

const routes: Routes = [
  { path: '', component: PrimeiraPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeiraPageRoutingModule { }
