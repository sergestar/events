import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router'; 
import { IEvent } from './shared/index';

@Component({
    template: `<div>
    <h1>Upcoming events</h1>
    <hr>
    <div class="row">
    <div  *ngFor="let event of events" class="col-md-5">
    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>`
})

export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(private eventSerivce: EventService, private toastrService: ToastrService, private route: ActivatedRoute){      
    }

    ngOnInit(){
      //this.eventSerivce.getEvents().subscribe(events => {this.events = events});
      this.events = this.route.snapshot.data['events'];
    }
    
    handleThumbnailClick(eventName){
      this.toastrService.success(eventName);
    }

}