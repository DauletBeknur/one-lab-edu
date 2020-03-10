import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Movie } from '../services/movie';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[];

  constructor(private firestore: AngularFirestore) { }

  getMovies() {
    return this.firestore.collection('movies').snapshotChanges();
}

}

