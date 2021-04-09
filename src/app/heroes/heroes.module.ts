// ngmodule
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    // son mis componentes de mi carpeta 
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // que cosas quiero que sean visibles afuera de este modulo
    exports: [
        ListadoComponent
    ],
    // aqui dentro van modulos
    imports: [
        // CommonModule me ofrece parte de codigo como el ngif , ngfor etc... es importante 
        // a eso se le conoce directivas personalizadas
        CommonModule
    ]

})
export class HeroesModule {

}