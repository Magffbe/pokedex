import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
mensajes: string[] = []
  constructor() { }

  agregarMensaje(texto: string){
    this.mensajes.push(texto)
  }

}
