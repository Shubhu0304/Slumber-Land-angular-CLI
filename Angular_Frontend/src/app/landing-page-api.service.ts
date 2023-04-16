import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class LandingPageApiService {

  constructor(private http: HttpClient) {

  }
  getData() {
    let url = "http://localhost:8000/api/getAll"
    return this.http.post(url, {});
  }

  getTrendingPageData() {
    let url = "http://localhost:8000/api/Popular"
    return this.http.post(url, {});
  }

  getTopPicksData() {
    let url = "http://localhost:8000/api/topPicks"
    return this.http.post(url, {});
  }

  getTopRatedData() {
    let url = "http://localhost:8000/api/topRated"
    return this.http.post(url, {});
  }

}
