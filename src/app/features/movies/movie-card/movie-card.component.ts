import {Component, Input, OnInit} from "@angular/core";
import {NgFor} from "@angular/common";

import {Movie} from "../movie.model";

@Component({
  selector: 'app-movie-card',
  templateUrl: 'movie-card.component.html',
  standalone: true,
  imports: [
    NgFor
  ]
})

export class MovieCardComponent implements OnInit {
  @Input() movie: Movie | undefined;
  
  
  //SINGLETON DESIGN PATTERN WITH CLASSES
  // Config = {
  //   start: () => console.log('App has started'),
  //   update: () => console.log('App has updated'),
  // }

  ngOnInit(): void {

  }
}
