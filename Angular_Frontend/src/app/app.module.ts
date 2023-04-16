import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { ListingCardComponent } from './Components/listing-card/listing-card.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginComponent } from './Components/login/login.component';
// import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component'
import { HttpClientModule } from '@angular/common/http';
import { TrendingComponent } from './Components/trending/trending.component';
import { TopPicksComponent } from './Components/top-picks/top-picks.component';
import { TopRatedComponent } from './Components/top-rated/top-rated.component';
import { ViewDetailsComponent } from './Components/view-details/view-details.component';
import { TrendingDetailsComponent } from './Components/trending-details/trending-details.component';
import { TopPicksDetailsComponent } from './Components/top-picks-details/top-picks-details.component';
import { TopRatedDetailsComponent } from './Components/top-rated-details/top-rated-details.component';
import { FavoritesComponent } from './Components/favorites/favorites.component';
import { FavoritesDetailsComponent } from './Components/favorites-details/favorites-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ListingCardComponent,
    // LoginComponent,
    // SignUpComponent,
    PageNotFoundComponent,
    TrendingComponent,
    TopPicksComponent,
    TopRatedComponent,
    ViewDetailsComponent,
    TrendingDetailsComponent,
    TopPicksDetailsComponent,
    TopRatedDetailsComponent,
    FavoritesComponent,
    FavoritesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
