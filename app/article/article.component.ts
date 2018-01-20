/*
 * Http request using Angular4:
 * https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { URL } from '../constants';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],

    // To style downloaded innerHtml
    encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {
    article: Article;

    // inject route
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // get requested article through resolve
        this.route.data.subscribe((data) => {
            this.article = data.article;
        });
    }
}
