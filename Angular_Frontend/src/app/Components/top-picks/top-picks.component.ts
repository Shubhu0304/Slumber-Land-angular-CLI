import { Component } from '@angular/core';
import { LandingPageApiService } from 'src/app/landing-page-api.service';

@Component({
  selector: 'app-top-picks',
  templateUrl: './top-picks.component.html',
  styleUrls: ['./top-picks.component.css']
})
export class TopPicksComponent {

  topPicksData

  constructor(private data: LandingPageApiService) {
    this.data.getTopPicksData().subscribe(data => {
      console.warn(data)
      this.topPicksData = data
    })
  }

}
