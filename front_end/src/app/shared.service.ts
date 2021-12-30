import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});



  constructor(private http:HttpClient) { }

  getMovielist():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/movie/',
    {headers : this.httpHeaders});
  }

  getActorlist():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/actor/',
    {headers : this.httpHeaders});
  }

  getsortbytitle():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/sortbytitle/',
    {headers : this.httpHeaders});
  }

  getsortbydate():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/sortbyreleasedate/',
    {headers : this.httpHeaders});
  }

  incrementvote(id : number):Observable<any>{
    console.log("increment called")
    const formData = new FormData()
    formData.append('id', id.toString())
    return this.http.post<any>(this.APIUrl+ '/increment/',
    formData,{headers : new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})});

  }

  getRealtionlist():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/relation/',
    {headers : this.httpHeaders});
  }



 




}
