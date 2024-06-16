import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from '../pokeservice.service';
import { IPokemon } from '../interfaces/IPokemon';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IDetallePokemon } from '../interfaces/IDetallePokemon';
import { NotificacionesService } from '../notificaciones.service';


@Component({
  selector: 'app-pantallados',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pantallados.component.html',
  styleUrl: './pantallados.component.css'
})
export class PantalladosComponent implements OnInit{
  conteo: number = 0
  pokemons: IPokemon[] = []
  detallesPokemon: IDetallePokemon[] = []
  limite: number = 150

  constructor(private pokeserviceService:PokeserviceService, private ruta: ActivatedRoute, private notificaciones: NotificacionesService) { }

  ngOnInit(): void {
    this.ruta.queryParams.subscribe(params =>{
      const limiteParametro: number | undefined = params['limite']
      if (limiteParametro){
        this.limite = params['limite']
      }else{
        this.limite = 150
      }
    })

      this.pokeserviceService.getPokemons(this.limite).subscribe(pokemons =>{
        this.conteo = pokemons.count
        this.pokemons = pokemons.results
       this.pokemons.forEach(detalle => {
        this.pokeserviceService.getDetallesPokemon(detalle.url).subscribe(detallePokemon =>{
          this.detallesPokemon.push(detallePokemon)
        })

       })

  })

}

agregarNotificacionpantallados(){
  this.notificaciones.agregarMensaje("Agregando mensaje desde pantalla dos")
}

}

