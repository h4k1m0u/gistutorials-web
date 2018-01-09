import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL, MONTHS } from './constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    months: number[][];
    monthsNames = MONTHS;
    
    // inject classes
    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        // get months containing articles through resolve
        this.route.data.subscribe((data) => {
            this.months = data.months;
        });
    }
}
