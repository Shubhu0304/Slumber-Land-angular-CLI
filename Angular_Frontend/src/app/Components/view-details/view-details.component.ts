import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingPageApiService } from 'src/app/landing-page-api.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {

  places;
  placeId;

  constructor(private activatedRoute: ActivatedRoute, private data: LandingPageApiService) {
    this.placeId = this.activatedRoute.snapshot.paramMap.get('id');

    this.data.getData().subscribe(data => {
      console.log(data)
      this.places = data
    });
  }

}
