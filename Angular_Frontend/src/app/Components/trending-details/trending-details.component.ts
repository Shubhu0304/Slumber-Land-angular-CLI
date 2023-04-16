import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingPageApiService } from 'src/app/landing-page-api.service';

@Component({
  selector: 'app-trending-details',
  templateUrl: './trending-details.component.html',
  styleUrls: ['./trending-details.component.css']
})
export class TrendingDetailsComponent {

  places;
  placeId;

  constructor(private activatedRoute: ActivatedRoute, private data: LandingPageApiService) {
    this.placeId = this.activatedRoute.snapshot.paramMap.get('id');

    this.data.getTrendingPageData().subscribe(data => {
      console.log(data)
      this.places = data
    });
  }

}
