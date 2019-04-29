import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
    appName = 'GIS Tutorials';
    slogan = 'GIS Tutorials For Everyone';
    subSlogan = 'Python, GIS, Open-Source...'
    date = new Date();

    constructor(public media: MediaObserver) { }

    ngOnInit() {
    }
}
