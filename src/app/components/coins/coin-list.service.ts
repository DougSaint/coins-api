import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Coin } from './coin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CoinService {

	private url = 'https://www.binance.com/api/v3/ticker/price'


  constructor(private http:HttpClient) { }

  getCoins():Observable<Coin[]>{
		return this.http.get<Coin[]>(this.url)
  }
}
