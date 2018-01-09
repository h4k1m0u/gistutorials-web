import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import services & resolves
import { ArticlesService } from './services/articles.service';
import { ArticleResolve } from './article/article.resolve';
import { ArticlesResolve } from './articles/articles.resolve';

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
import { ArticlesDateComponent } from './articles-date/articles-date.component';

// import ngModel
import { FormsModule } from '@angular/forms';
// import http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import router
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'articles', component: ArticlesComponent, resolve: { articles: ArticlesResolve }},
    {path: 'article/:id', component: ArticleComponent, resolve: { article: ArticleResolve }},
    {path: 'articles/date/:year/:month', component: ArticlesDateComponent},
];


@NgModule({
    declarations: [
        AppComponent,
        ArticlesComponent,
        ArticleComponent,
        ArticlesDateComponent,
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
        // services & resolvers
        ArticlesService,
        ArticleResolve,
        ArticlesResolve,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
