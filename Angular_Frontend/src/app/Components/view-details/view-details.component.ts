import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { LandingPageApiService } from 'src/app/landing-page-api.service';

import { AuthApiService } from 'src/app/auth-api.service';

import { FavoritesServiceService } from 'src/app/favorites-service.service';




@Component({

 selector: 'app-view-details',

 templateUrl: './view-details.component.html',

 styleUrls: ['./view-details.component.css']

})

export class ViewDetailsComponent {




 places;

 placeId;

 isLoggedIn;




 constructor(private activatedRoute: ActivatedRoute, private data: LandingPageApiService , private route: Router, private user: AuthApiService, private favoritesService: FavoritesServiceService) {

  this.placeId = this.activatedRoute.snapshot.paramMap.get('id');




  this.data.getData().subscribe(data => {

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