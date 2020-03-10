import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../services/movie';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  movies: Movie[];
  status: boolean = true;
  searchText: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...Object.assign({}, e.payload.doc.data())
        } as Movie;
      })
    });
  }

  drop(){
    this.status =!this.status;
  }

  
}
