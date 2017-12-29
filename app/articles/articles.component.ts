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

interface Feed {
    count: number;
    next: string;
    previous: string;
    results: Article[];
}

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    articles: Article[];
    page: number;
    numPages: number;

    // inject http
    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    ngOnInit() {
        // get articles in requested page asynchronously
        this.route.params.subscribe(params => {
            this.page = Number(params['page'])
            this.getArticles();
        });
    }

    getArticles() {
        // get articles from the server
        this.http.get<Feed>(URL + '/api/articles/?page=' + this.page).subscribe(
            res => {
                this.articles = res.results;
                this.numPages = Math.ceil(res.count / 10);
            },
            err => {
                console.log('Error: ' + err.message);
            }
        );
    }
}
