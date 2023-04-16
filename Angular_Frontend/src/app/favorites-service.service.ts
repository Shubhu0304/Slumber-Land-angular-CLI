import { Injectable } from '@angular/core';

const FAVORITES_KEY = 'favorites';

@Injectable({
  providedIn: 'root'
})

export class FavoritesServiceService {

  private favorites: any[];

  constructor() {
    this.favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  }

  addToFavorites(item: any): void {
    if (this.favorites.includes(item)) {
      alert("Item is already added to favorites")
    } else {
      this.favorites.push(item);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(this.favorites));
    }
  }

  removeFromFavorites(item: any): void {
    const index = this.favorites.indexOf(item);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(this.favorites));
    }
  }

  getFavorites(): any[] {
    return this.favorites;
  }

}
