// https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html
// Don't route to page until data is loaded using resolver
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/article.model';

@Injectable()
export class ArticlesResolve implements Resolve<Article> {
    // inject the service that fetches an article as an Observables
    constructor(private articlesService: ArticlesService) { }

    // route is the future route that will be activated
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> {
        return this.articlesService.getArticles();
    }
}
