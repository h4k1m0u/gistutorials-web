import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

// import components
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';

// import ngModel
import { FormsModule } from '@angular/forms';
// import http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import router
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'articles/:page', component: ArticlesComponent},
];


@NgModule({
    declarations: [
        AppComponent,
        ArticlesComponent,
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
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
