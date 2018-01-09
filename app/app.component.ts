import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL, MONTHS } from './constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    appName = 'GIS Tutorials';
    months: number[][];
    monthsNames = MONTHS;
    
    // inject classes
    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {
        // Get only months having articles
        this.http.get<number[][]>(URL + '/api/articles/dates/').subscribe(
            res => {
                this.months = res;

                // redirect to list of articles
                this.router.navigateByUrl('/articles');
            },
            err => {
                console.log('Error: ' + err.message);
            }
        );
    }
}
