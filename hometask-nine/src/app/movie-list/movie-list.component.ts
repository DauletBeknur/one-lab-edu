import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../services/movie';
import { Router } from '@angular/router';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService, private router: Router) { }

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

  gotoPage(movie: Movie){
    this.router.navigate(['/movie-page', movie.id]);
  }

}
