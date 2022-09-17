import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './models/hero.model';
import { HEROES } from './models/mock-heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) {
    
  }

  getHeroes(): Observable<Hero[]> {
    const heroes: Observable<Hero[]> = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const hero: Hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero ${hero.name}`);
    return of(hero);
  }
}
