import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacionesService } from '../notificaciones.service';
import { IDetallePokemon } from '../interfaces/IDetallePokemon';
import { IPokemon } from '../interfaces/IPokemon';
import { PokeserviceService } from '../pokeservice.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-pantallauno',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pantallauno.component.html',
  styleUrl: './pantallauno.component.css'
})
export class PantallaunoComponent implements OnInit{
titulo: string=''
mensaje: string=''
conteo: number = 0
limite: number = 150
pokemons: IPokemon[] = []  
detallesPokemon: IDetallePokemon[] = [] 

constructor(private ruta: ActivatedRoute, private notificaciones: NotificacionesService, private pokeserviceService:PokeserviceService ){}


ngOnInit(): void {
  this.ruta.queryParams.subscribe(params => {
    this.titulo = params['titulo']
    this.mensaje = params['mensaje']

      this.ruta.queryParams.subscribe(params =>{
        const limiteParametro: number | undefined = params['limite']
        if (limiteParametro){
          this.limite = params['limite']
        }else{
          this.limite = 150
        }
      })
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
agregarNotificacionpantallauno(){
  this.notificaciones.agregarMensaje("Agregando mensaje desde pantalla uno")
}
}



