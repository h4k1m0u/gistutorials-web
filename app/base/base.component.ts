import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
    appName = 'GIS Tutorials';

    constructor(private googleAnalytics: Angulartics2GoogleAnalytics) { }

    ngOnInit() {
    }
}
