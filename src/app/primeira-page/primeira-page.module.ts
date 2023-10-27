import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeiraPageRoutingModule } from './primeira-page-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimeiraPageComponent } from './primeira-page.component';


@NgModule({
  declarations: [
    PrimeiraPageComponent

  ],
  imports: [
    CommonModule,
    PrimeiraPageRoutingModule,
    
    PrimeiraPageRoutingModule,
  
    FormsModule
  ]
})
export class PrimeiraPageModule { }
