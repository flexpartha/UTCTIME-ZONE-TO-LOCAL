import {Component} from '@angular/core';
import {NgFor} from "@angular/common";

import {ShowsService} from "./shows.service";
import {ShowCardComponent} from "./show-card/show-card.component";
import { SingletonClsComponent } from '../movies/movie-card/singleton-cls/singleton-cls.component';
import { Allien } from '../movies/movie-card/factoryMethodPattern/allien.class';

const instance = new SingletonClsComponent();

const all = new Allien("SAM","DO SOMETNING");

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [
    ShowCardComponent,
    NgFor
  ],
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent {

  shows = this.showsService.getShows();

  constructor(private showsService: ShowsService) { 
    Object.freeze(instance);
    console.log(all.fly());
    console.log(all.name = "JAMTHAM");
    console.log(all.sayPhrase());
  }

}
