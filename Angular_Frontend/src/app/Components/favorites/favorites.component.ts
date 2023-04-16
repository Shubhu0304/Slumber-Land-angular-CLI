import { Component } from '@angular/core';
import { FavoritesServiceService } from 'src/app/favorites-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent {
  favorites: any[];

  constructor(private favoritesService: FavoritesServiceService) {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFromFavorites(item: any): void {
    this.favoritesService.removeFromFavorites(item);
    this.favorites = this.favoritesService.getFavorites();
  }
}
