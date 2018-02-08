// https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html
// Don't route to page until data is loaded using resolver
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TagsService } from '../services/tags.service';
import { Tag } from '../models/article.model';

@Injectable()
export class TagResolve implements Resolve<Tag> {
    // inject the service that fetches an article as an Observables
    constructor(private tagsService: TagsService) { }

    // route is the future route that will be activated
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tag> {
        return this.tagsService.getTag(route.params['tag']);
    }
}
