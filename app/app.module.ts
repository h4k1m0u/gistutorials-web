import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// services & resolves
import { MonthsService } from './services/months.service';
import { ArticlesService } from './services/articles.service';
import { MonthsResolve } from './months.resolve';
import { ArticleResolve } from './article/article.resolve';
import { ArticlesResolve } from './articles/articles.resolve';
import { ArticlesDateResolve } from './articles-date/articles-date.resolve';

// material
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

// components
import { BaseComponent } from './base/base.component';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesDateComponent } from './articles-date/articles-date.component';

// http client
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// router
import { RouterModule, Routes } from '@angular/router';

// google analytics for angular
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

// flex layouts
import { FlexLayoutModule } from '@angular/flex-layout';

// routes
const routes: Routes = [
    // base component contains main layout
    // https://stackoverflow.com/a/42013623/2228912
    {
        path: '',
        redirectTo: 'articles',
        pathMatch: 'full',
    },
    {
        // manage app-level resolve using parent-children routes (in app component)
        // https://stackoverflow.com/a/45113376/2228912
        path: '',
        component: AppComponent,
        resolve: { months: MonthsResolve },
        children: [
            {path: 'articles', component: ArticlesComponent, resolve: { articles: ArticlesResolve }},
            {path: 'article/:id', component: ArticleComponent, resolve: { article: ArticleResolve }},
            {path: 'articles/date/:year/:month', component: ArticlesDateComponent, resolve: { articlesDate: ArticlesDateResolve }},
        ]
    }
];


@NgModule({
    declarations: [
        AppComponent,
        ArticlesComponent,
        ArticleComponent,
        ArticlesDateComponent,
        BaseComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
        FlexLayoutModule,

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
        // services & resolvers
        MonthsService,
        ArticlesService,
        MonthsResolve,
        ArticleResolve,
        ArticlesResolve,
        ArticlesDateResolve,
    ],
    bootstrap: [BaseComponent]
})
export class AppModule { }
