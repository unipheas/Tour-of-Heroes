import { Injectable } from '@angular/core';

import { Hero } from '.././hero-detail/hero';
import { HEROES } from '.././mock-data/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
