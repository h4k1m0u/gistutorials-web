import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
    appName = 'GIS Tutorials';
    slogan = 'GIS Tutorials For Everyone';
    date = new Date();

    constructor(private googleAnalytics: Angulartics2GoogleAnalytics, public media: ObservableMedia) { }

    ngOnInit() {
    }
}
