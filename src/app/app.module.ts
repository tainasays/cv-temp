import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrimeiraPageComponent } from './primeira-page/primeira-page.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContatoComponent } from './contato/contato.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    
    
    ContatoComponent,
    NaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  
    FormsModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
