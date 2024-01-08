import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '../Model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  id!: Number;
  getEvent: any;

  constructor(private httpClient:HttpClient) { }
  getEvents():Observable<Events[]>{

    var url="http://localhost:8080/api/v1/event";
    return this.httpClient.get<Events[]>(url);
  }

  getEventByID(id:Number):Observable<Events[]>{
    var url="http://localhost:8080/api/v1/event" + id;
    return this.httpClient.get<Events[]>(url);
  }

  updateVote(event:Events):Observable<Events[]>{
    
    var url="http://localhost:8080/api/v1/event/" +event.id + "?vote=" + event.vote;
    return this.httpClient.put<Events[]>(url,event);
  }
}
