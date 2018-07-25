import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApicallService {

  constructor(private _http:HttpClient) { }
  showit(){
	    var api="https://openweathermap.org/data/2.5/forecast?lat=33&lon=-84&appid=b6907d289e10d714a6e88b30761fae22";
      return this._http.get(api);
    }
  } 
