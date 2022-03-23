/*
 * @Author: r1ngo
 * @Date: 2022-03-23 14:00:53
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-23 16:23:54
 * @Description: ez pz lemon squezzy
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    // 通过订阅来获取返回结果
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
