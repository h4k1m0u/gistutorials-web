// https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html
// Don't route to page until data is loaded using resolver
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { URL } from '../constants';
import { Article } from '../models/article.model';
import { Feed } from '../models/feed.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticlesService {
    constructor(private http: HttpClient) { }

    getArticles() {
        // send articles as observable to resolve
        return Observable.create(observer => {
            // get articles from the server
            this.http.get<Feed>(URL + '/api/articles/').subscribe(
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

    getArticle(id) {
        // send article as observable to resolve
        return Observable.create(observer => {
            // get article from the server
            this.http.get<Article>(URL + '/api/articles/' + id + '/').subscribe(
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

    getArticlesDate(year, month) {
        // send articles as observable to resolve
        return Observable.create(observer => {
            // get articles for given month in given year from the server
            this.http.get<Article[]>(URL + '/api/articles/date/' + year + '/' + month + '/').subscribe(
                res => {
                    // send date (needed in template)
                    observer.next({articles: res, year: year, month: month});
                    observer.complete();
                },
                err => {
                    console.log('Error: ' + err.message);
                }
            );
        });
    }
}
