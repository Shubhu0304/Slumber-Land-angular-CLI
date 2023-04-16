import { Component } from '@angular/core';
import { LandingPageApiService } from 'src/app/landing-page-api.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent {

  trendingPageData

  constructor(private data: LandingPageApiService) {

    this.data.getTrendingPageData().subscribe(data =>{
      console.warn(data)
      this.trendingPageData = data
    })

  }

}
