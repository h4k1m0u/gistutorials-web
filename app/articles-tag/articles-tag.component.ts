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
    selector: 'app-articles-tag',
    templateUrl: './articles-tag.component.html',
    styleUrls: ['./articles-tag.component.scss']
})
export class ArticlesTagComponent implements OnInit {
    articles: Article[];
    tag: string;

    // inject http
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // get requested articles for given tag through resolve
        this.route.data.subscribe((data) => {
            this.tag = data.articlesTag.tag;
            this.articles = data.articlesTag.articles;
        });
    }
}
