import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesServiceService } from 'src/app/favorites-service.service';
import { LandingPageApiService } from 'src/app/landing-page-api.service';

@Component({
  selector: 'app-favorites-details',
  templateUrl: './favorites-details.component.html',
  styleUrls: ['./favorites-details.component.css']
})
export class FavoritesDetailsComponent {

  places;
  placeId;

  constructor(private activatedRoute: ActivatedRoute, private data: FavoritesServiceService) {
    this.placeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.places = this.data.getFavorites()
  }

}
