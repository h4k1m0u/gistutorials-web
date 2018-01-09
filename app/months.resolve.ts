// https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html
// Don't route to page until data is loaded using resolver
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MonthsService } from './services/months.service';

@Injectable()
export class MonthsResolve implements Resolve<number[][]> {
    // inject the service that fetches months as an Observables
    constructor(private monthsService: MonthsService) { }

    // route is the future route that will be activated
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number[][]> {
        return this.monthsService.getMonths();
    }
}
