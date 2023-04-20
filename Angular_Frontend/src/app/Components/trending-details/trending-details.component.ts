import { Component } from '@angular/core';
import { LandingPageApiService } from 'src/app/landing-page-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthApiService } from 'src/app/auth-api.service';
import { FavoritesServiceService } from 'src/app/favorites-service.service';


@Component({
  selector: 'app-trending-details',
  templateUrl: './trending-details.component.html',
  styleUrls: ['./trending-details.component.css']
})
export class TrendingDetailsComponent {

  places;
  placeId;
  isLoggedIn;
  constructor(private activatedRoute: ActivatedRoute, private data: LandingPageApiService,private route: Router, private user: AuthApiService, private favoritesService: FavoritesServiceService ) {
    this.placeId = this.activatedRoute.snapshot.paramMap.get('id');

    this.data.getTrendingPageData().subscribe(data => {
      console.log(data)
      this.places = data
    });
  }
  ngOnInit(): void {

    this.isLoggedIn = this.user.isLoggedIn
   
   }
   
   addToFavorites(item: any): void {
   
   this.favoritesService.addToFavorites(item);
   
   }

}
