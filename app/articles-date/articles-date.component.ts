/*
 * Http request using Angular4:
 * https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL, MONTHS } from '../constants';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
    selector: 'app-articles-date',
    templateUrl: './articles-date.component.html',
    styleUrls: ['./articles-date.component.scss']
})
export class ArticlesDateComponent implements OnInit {
    articles: Article[];
    month: number;
    monthsNames = MONTHS;
    year: number;

    // inject http
    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    ngOnInit() {
        // get articles in requested month and year asynchronously
        this.route.params.subscribe(params => {
            this.month = Number(params['month'])
            this.year = Number(params['year'])
            this.getArticles();
        });
    }

    getArticles() {
        // get articles for given month in given year from the server
        this.http.get<Article[]>(URL + '/api/articles/date/' + this.year + '/' + this.month + '/').subscribe(
            res => {
                this.articles = res;
            },
            err => {
                console.log('Error: ' + err.message);
            }
        );
    }
}
