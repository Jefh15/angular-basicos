import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  // un arreglo de strings 
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor', 'Capitan America'];
  HeroeBorrado: string = '';

  borrarHeroe():void{
    console.log('Borrando...');
    // esto es o un string vacio || ''
    this.HeroeBorrado = this.heroes.shift() || '';
    // console.log(heroeInicioBorrado);
  }

}
