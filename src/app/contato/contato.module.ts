import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective, NgxMaskPipe
  ],
  providers: [provideNgxMask()]

})
export class ContatoModule { }
