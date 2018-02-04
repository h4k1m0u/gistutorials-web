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
    url:string = URL;

    // inject http
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // get requested articles for given date through resolve
        this.route.data.subscribe((data) => {
            this.year = data.articlesDate.year;
            this.month = data.articlesDate.month;
            this.articles = data.articlesDate.articles;
        });
    }
}
