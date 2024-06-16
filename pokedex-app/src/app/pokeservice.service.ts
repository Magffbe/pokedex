import { Injectable } from '@angular/core';
import { IListadopokemon } from './interfaces/IListadopokemon';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { IDetallePokemon } from './interfaces/IDetallePokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeserviceService {
  private apiUrlBase="https://pokeapi.co/api/v2/"

  constructor(private Client: HttpClient) { }

getPokemons(limit: number): Observable<IListadopokemon>{
  const resultado = this.Client.get<IListadopokemon>(`${this.apiUrlBase}/pokemon/?limit=${limit}`)
  return resultado

}

getDetallesPokemon(url: string): Observable<IDetallePokemon>{
  return this.Client.get<IDetallePokemon>(url)
}

}
