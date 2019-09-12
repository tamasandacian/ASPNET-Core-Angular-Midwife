import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
  pure: true
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(experiences: any[], searchTerm: string): any[] {
    if (!experiences) return [];
    if (!searchTerm) return experiences;

    searchTerm = searchTerm.toLowerCase();

    return experiences.filter(experience => {
      return experience.title.toLowerCase().includes(searchTerm);
    });
  }
}
