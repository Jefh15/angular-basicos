// ngmodule
// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// importo mis
import { ContadorComponent } from './contador/contador.component';



@NgModule({
    // son mis componentes de mi carpeta 
    declarations: [
        ContadorComponent
    ],
    // que cosas quiero que sean visibles afuera de este modulo
    exports: [
        ContadorComponent
    ],
    // aqui dentro van modulos
    imports: [
        // CommonModule me ofrece parte de codigo como el ngif , ngfor etc... es importante 
        // a eso se le conoce directivas personalizadas
        // CommonModule
    ]

})
export class ContadorModule {

}