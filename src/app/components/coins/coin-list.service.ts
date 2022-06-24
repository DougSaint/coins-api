import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Coin } from './coin';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class CoinService {

	private url = environment.BASE_URL


  constructor(private http:HttpClient) { }

  getCoins():Observable<Coin[]>{
		return this.http.get<Coin[]>(this.url)
  }
}
