// https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html
// Don't route to page until data is loaded using resolver
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../constants';
import { HttpClient } from '@angular/common/http';
import { TagsFeed } from '../models/feed.model';
import { Tag } from '../models/article.model';

@Injectable()
export class TagsService {
    constructor(private http: HttpClient) { }

    getTags() {
        // send tags as observable to resolve
        return Observable.create(observer => {
            // Get all tags
            this.http.get<TagsFeed>(URL + '/api/tags/').subscribe(
                res => {
                    observer.next(res.results);
                    observer.complete();
                },
                err => {
                    console.log('Error: ' + err.message);
                }
            );
        });
    }

    getTag(id) {
        // send tag as observable to resolve
        return Observable.create(observer => {
            // get tag by id
            this.http.get<Tag>(URL + '/api/tags/' + id + '/').subscribe(
                res => {
                    // send tag (needed in template)
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
