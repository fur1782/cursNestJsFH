import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  
  
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly http: AxiosAdapter,
  ){}

  async executeSeed() {
    
    await this.pokemonService.removeAll();
    
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')  
    
    const pokemonList = data.results.map(({name, url}) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      return {no, name};
    });

    const returnList = this.pokemonService.fillPokemonWithSeedData(pokemonList as Pokemon[]);
    
    return returnList;
  }

}
