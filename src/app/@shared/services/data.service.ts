import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  filters = {
    limit: 5,
    offset: 0,
    status: '',
    type: '',
    search: '',
    sortParams: {
      key: '',
      order: 'desc',
    },
  };
  public searchSub$ = new Subject<string>();

  constructor(private http: HttpClient, private media: MediaObserver) {}
  get(apiUrl: string, model: any): Observable<any> {
    return this.http
      .get(
        apiUrl +
          `?limit=${this.filters.limit}&offset=${this.filters.offset}&text=${this.filters.search}&order=${this.filters.sortParams.order}&type=${this.filters.type}`,
        model
      )
      .pipe(
        map((items: any) => {
          return {
            count: items.count,
            data: model.adapt(items),
          };
        })
      );
  }

  resetFilters() {
    this.filters.limit = 5;
    this.filters.search = '';
    this.filters.offset = 0;
  }

  get isMobile(): boolean {
    return this.media.isActive('sm');
  }
  get smallDevice(): boolean {
    return this.media.isActive('xs');
  }
}
