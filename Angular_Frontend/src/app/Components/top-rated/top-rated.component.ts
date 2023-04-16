import { Component } from '@angular/core';
import { LandingPageApiService } from 'src/app/landing-page-api.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {

  topRatedData

  constructor(private data: LandingPageApiService) {
    this.data.getTopRatedData().subscribe(data => {
      console.warn(data)
      this.topRatedData = data
    })
  }

}
