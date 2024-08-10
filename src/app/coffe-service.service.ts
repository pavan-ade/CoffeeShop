import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeServiceService {

  constructor(private hc : HttpClient) { }

  getData(){
    return this.hc.get('https://api.sampleapis.com/coffee/hot');
  }
}
