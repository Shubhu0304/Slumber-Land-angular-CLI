import { Component } from '@angular/core';
import { LandingPageApiService } from '../../landing-page-api.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {

  landingPageData

  constructor(private data: LandingPageApiService) {
    this.data.getData().subscribe(data => {
      console.log(data)
      this.landingPageData = data
    })
  }

}
