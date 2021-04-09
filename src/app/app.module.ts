import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Mi modulo de Heroes
// Mi modulo de contador
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';



// esto es un decorador
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule, 
    ContadorModule
    // aqui colocamos los otros modulos
  ],
  providers: [
    // aqui van los servicios especificos a un modulo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
