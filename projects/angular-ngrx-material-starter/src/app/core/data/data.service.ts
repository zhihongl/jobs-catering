import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  API_ENDPOINT: String;

  constructor(
    private http: HttpClient
  ) {
    this.API_ENDPOINT = 'https://zware-ngnewapi.azurewebsites.net/api/zhihong_lu2000_at_gmail_com/';
  }

  getUserProfiles() {
    return this.http.get(`${this.API_ENDPOINT}/profiles`);
  }

  submitUserAccount(values) {
    // const results = this.http.get(this.API_ENDPOINT + 'profiles');
    return this.http.post(`${this.API_ENDPOINT}/profiles`, values);
  }
}
