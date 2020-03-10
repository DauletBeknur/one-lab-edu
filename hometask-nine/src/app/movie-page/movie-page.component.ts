import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../services/movie.service';
import {Movie} from '../services/movie';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movies: any;
  movie: any;
  id: string;
  imgId: string;
 

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
   this.getData();
   this.getImage();
}
  

  getData(){
    this.movieService.getMovies().subscribe(data => {
      this.movies = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...Object.assign({}, e.payload.doc.data())
        } as Movie;
      })
    });
  }

  getImage(){
    this.imgId = `assets/images/${this.id}.jpg`;
  }

  goBack(){
    this.router.navigate(['/movie-list']);
  }

}


