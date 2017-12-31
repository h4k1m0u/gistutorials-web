/*
 * Http request using Angular4:
 * https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL, MONTHS } from '../constants';
import { ActivatedRoute } from '@angular/router';

// Response interfaces
interface Article {
    title: string;
    text: string;
    date: string;
}

@Component({
    selector: 'app-articles-monthly',
    templateUrl: './articles-monthly.component.html',
    styleUrls: ['./articles-monthly.component.scss']
})
export class ArticlesMonthlyComponent implements OnInit {
    articles: Article[];
    month: number;
    months = MONTHS;

    // inject http
    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    ngOnInit() {
        // get articles in requested month asynchronously
        this.route.params.subscribe(params => {
            this.month = Number(params['month'])
            this.getArticles();
        });
    }

    getArticles() {
        // get articles for given month from the server
        this.http.get<Article[]>(URL + '/api/articles/month/' + this.month + '/').subscribe(
            res => {
                this.articles = res;
            },
            err => {
                console.log('Error: ' + err.message);
            }
        );
    }
}
