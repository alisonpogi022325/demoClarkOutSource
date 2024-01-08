import { Events } from '../Model/Event';
import { EventService } from './../Service/event.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;
  events: Array<Events>=[];
  
  constructor(private eventService:EventService){}
  ngOnInit(){
    this.getEventList()
  }
  getEventList(){
    this.eventService.getEvents().subscribe(res=>{
      this.events=res;
    })
  }

  updateVoteData(i:any){
    var data={
      id:this.events[i].id,
      eventName:this.events[i].eventName,
      eventDescription:this.events[i].eventDescription,
      vote:this.events[i].vote,
      dateAdded:this.events[i].dateAdded   
    }
    this.eventService.updateVote(data).subscribe(res=>{
      console.log(res);
    })
  }
}
