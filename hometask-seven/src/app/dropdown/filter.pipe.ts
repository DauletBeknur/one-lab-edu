import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(movies: any[], searchText: string, title: string): any[] {

    if (!movies) { return []; }

    if (!searchText) { return movies; }

    searchText = searchText.toUpperCase();

    return movies.filter(movie => {
      if (movie && movie[title]) {
        return movie[title].toUpperCase().includes(searchText);
      }
      return false;
    });
   }
}
