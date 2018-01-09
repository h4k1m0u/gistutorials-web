// https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html
// Don't route to page until data is loaded using resolver
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { URL } from '../constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MonthsService {
    constructor(private http: HttpClient) { }

    getMonths() {
        // send months as observable to resolve
        return Observable.create(observer => {
            // Get only months having articles
            this.http.get<number[][]>(URL + '/api/articles/dates/').subscribe(
                res => {
                    observer.next(res);
                    observer.complete();
                },
                err => {
                    console.log('Error: ' + err.message);
                }
            );
        });
    }
}
