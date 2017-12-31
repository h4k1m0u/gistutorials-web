import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MONTHS } from './constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    appName = 'GIS Tutorials';
    months = MONTHS;
    
    // inject classes
    constructor(private router: Router) { }

    ngOnInit() {
        // redirect to list of articles
        this.router.navigateByUrl('/articles/1');
    }
}
