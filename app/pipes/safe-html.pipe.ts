// Display HTML without sanitizing
// https://medium.com/@AAlakkad/angular-2-display-html-without-sanitizing-filtering-17499024b079
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer){}

    transform(content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
