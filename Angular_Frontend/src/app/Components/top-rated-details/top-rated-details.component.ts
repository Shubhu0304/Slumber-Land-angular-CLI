import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingPageApiService } from 'src/app/landing-page-api.service';

@Component({
  selector: 'app-top-rated-details',
  templateUrl: './top-rated-details.component.html',
  styleUrls: ['./top-rated-details.component.css']
})
export class TopRatedDetailsComponent {
  places;
  placeId;

  constructor(private activatedRoute: ActivatedRoute, private data: LandingPageApiService) {
    this.placeId = this.activatedRoute.snapshot.paramMap.get('id');

    this.data.getTopRatedData().subscribe(data => {
      console.log(data)
      this.places = data
    });
  }
}
