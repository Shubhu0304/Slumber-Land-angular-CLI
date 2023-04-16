import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingPageApiService } from 'src/app/landing-page-api.service';

@Component({
  selector: 'app-top-picks-details',
  templateUrl: './top-picks-details.component.html',
  styleUrls: ['./top-picks-details.component.css']
})
export class TopPicksDetailsComponent {

  places;
  placeId;

  constructor(private activatedRoute: ActivatedRoute, private data: LandingPageApiService) {
    this.placeId = this.activatedRoute.snapshot.paramMap.get('id');

    this.data.getTopPicksData().subscribe(data => {
      console.log(data)
      this.places = data
    });
  }

}
