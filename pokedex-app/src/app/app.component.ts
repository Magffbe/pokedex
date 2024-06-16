import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PantalladosComponent } from './pantallados/pantallados.component';
import { PantallaunoComponent } from './pantallauno/pantallauno.component';
import { NotificacionesService } from './notificaciones.service';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, PantalladosComponent, PantallaunoComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pokedex-app';
  constructor(public notificaciones: NotificacionesService){}
  ngOnInit(): void {
    
  }
      
  

}
