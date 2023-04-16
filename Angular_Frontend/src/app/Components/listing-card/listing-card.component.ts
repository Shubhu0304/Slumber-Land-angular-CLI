import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/auth-api.service';
import { FavoritesServiceService } from 'src/app/favorites-service.service';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.css']
})

export class ListingCardComponent {
  
  name = "Demo Listing"
  isLoggedIn
  @Input() landingPageData

  constructor(private route: Router, private user: AuthApiService, private favoritesService: FavoritesServiceService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.user.isLoggedIn
  }

  addToFavorites(item: any): void {
    this.favoritesService.addToFavorites(item);
  }

}
