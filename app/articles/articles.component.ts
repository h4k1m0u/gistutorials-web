/*
 * Http request using Angular4:
 * https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../constants';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    articles: Article[];

    // inject http
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // get requested articles through resolve
        this.route.data.subscribe((data) => {
            this.articles = data.articles;
        });
    }
}
