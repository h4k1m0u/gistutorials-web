import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL, MONTHS } from './constants';
import { Tag } from './models/article.model';
import { ObservableMedia } from '@angular/flex-layout';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    months: number[][];
    tags: Tag[];
    monthsNames = MONTHS;
    opened: boolean = true;
    
    // inject classes
    constructor(private route: ActivatedRoute, private router: Router, public media: ObservableMedia) { }

    ngOnInit() {
        // get months containing articles through resolve
        this.route.data.subscribe((data) => {
            this.months = data.months;
            this.tags = data.tags;
        });
    }
}
