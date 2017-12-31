import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
} from '@angular/material';

// import components
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesMonthlyComponent } from './articles-monthly/articles-monthly.component';

// import ngModel
import { FormsModule } from '@angular/forms';
// import http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import router
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'articles/:page', component: ArticlesComponent},
    {path: 'article/:id', component: ArticleComponent},
    {path: 'articles/month/:month', component: ArticlesMonthlyComponent},
];


@NgModule({
    declarations: [
        AppComponent,
        ArticlesComponent,
        ArticleComponent,
        ArticlesMonthlyComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),

        // material
        BrowserAnimationsModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
