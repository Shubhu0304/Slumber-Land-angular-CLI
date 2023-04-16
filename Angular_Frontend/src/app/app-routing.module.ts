import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { TrendingComponent } from './Components/trending/trending.component';
import { TopPicksComponent } from './Components/top-picks/top-picks.component';
import { TopRatedComponent } from './Components/top-rated/top-rated.component';
import { ViewDetailsComponent } from './Components/view-details/view-details.component';
import { TrendingDetailsComponent } from './Components/trending-details/trending-details.component';
import { TopPicksDetailsComponent } from './Components/top-picks-details/top-picks-details.component';
import { TopRatedDetailsComponent } from './Components/top-rated-details/top-rated-details.component';
import { FavoritesComponent } from './Components/favorites/favorites.component';
import { FavoritesDetailsComponent } from './Components/favorites-details/favorites-details.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'trending',
    component: TrendingComponent
  },
  {
    path: 'trending/view-details/:id',
    component: TrendingDetailsComponent
  },
  {
    path: 'top-picks',
    component: TopPicksComponent
  },
  {
    path: 'top-picks/view-details/:id',
    component: TopPicksDetailsComponent
  },
  {
    path: 'top-rated',
    component: TopRatedComponent
  },
  {
    path: 'top-rated/view-details/:id',
    component: TopRatedDetailsComponent
  },
  {
    path: 'view-details/:id',
    component: ViewDetailsComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'favorites/view-details/:id',
    component: FavoritesDetailsComponent
  },
  {
    path: 'user', loadChildren: () => import('./Components/user/user.module').then(mod => mod.UserModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
