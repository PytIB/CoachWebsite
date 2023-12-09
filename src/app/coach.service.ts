import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoachService {

  base_url ='http://localhost:5000'
  CoachUrl = 'http://localhost:5000/get_coaches'
  
  constructor(private http:HttpClient) { }

  get_coaches():Observable <any[]>{
    return this.http.get<any[]>(this.CoachUrl);
  }

}
