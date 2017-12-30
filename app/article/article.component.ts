/*
 * Http request using Angular4:
 * https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../constants';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

// Response interfaces
interface Article {
    title: string;
    text: string;
    date: string;
}

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    article: Article;
    id: number;

    // inject http
    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    ngOnInit() {
        // get requested article
        this.route.params.subscribe(params => {
            this.id = Number(params['id'])
            this.getArticle();
        });
    }

    getArticle() {
        // get article from the server
        this.http.get<Article>(URL + '/api/articles/' + this.id + '/').subscribe(
            res => {
                this.article = res;
            },
            err => {
                console.log('Error: ' + err.message);
            }
        );
    }
}
