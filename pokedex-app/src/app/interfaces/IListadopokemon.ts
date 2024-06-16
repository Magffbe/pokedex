import { IPokemon } from './IPokemon';

export interface IListadopokemon {
    count: number
    next: string
    previous: string | null
    results: IPokemon[]
}