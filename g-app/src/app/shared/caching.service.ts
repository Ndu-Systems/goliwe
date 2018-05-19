import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/share";
import { Injectable } from '@angular/core';

@Injectable()
export abstract class CachingService {

constructor() { }
      protected cache<T>(getter: () => Observable<T>,
      setter: (val: Observable<T>) => void,
      retreive: () => Observable<T>): Observable<T> {
      const cached = getter();
      if (cached !== undefined) {
      return cached;
      } else {
      const val = retreive().share();
      setter(val);
      return val;
      }

}
}
