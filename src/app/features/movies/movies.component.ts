import {Component} from '@angular/core';
import {NgFor} from "@angular/common";

import {MoviesService} from "./movies.service";
import {MovieCardComponent} from "./movie-card/movie-card.component";
import * as moment from 'moment';
import * as momentTimeZone from "moment-timezone";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  standalone: true,
  imports: [MovieCardComponent, NgFor, ReactiveFormsModule]
})
export class MoviesComponent {

  selectFormGrp!:FormGroup;

  movies = this.moviesService.getMovies();
  currentDate:any;
  utcTimeZone:any;
  date = new Date();
  localeTimezone:any;
  timestamp:any;
  timeZones = [
    {
      zoneId: "1",
      zoneName: "America/Los_Angeles"
    },
    {
      zoneId: "2",
      zoneName: "America/Toronto"
    },
    {
      zoneId: "3",
      zoneName: "America/New_York"
    },
    {
      zoneId: "4",
      zoneName: "Europe/Berlin"
    },
    {
      zoneId: "5",
      zoneName: "Australia/Sydney"
    },
    {
      zoneId: "6",
      zoneName: "America/Denver"
    },
    {
      zoneId: "7",
      zoneName: "America/Chicago"
    },
    {
      zoneId: "8",
      zoneName: "America/Phoenix"
    }
  ]

  constructor(private moviesService: MoviesService, private fb: FormBuilder) { 
    this.timestamp = this.date.getTime();
    var zone = "America/Los_Angeles";
    var zoneToronto = "America/Toronto";
    var zone3 = "America/New_York";
    var timeZoneEu = "Europe/Berlin";
    var timeZoneAEST = "Australia/Sydney";
    var americaDenver = 'America/Denver';
    this.currentDate = moment(new Date()).format("MMM Do YY");
    this.utcTimeZone =  momentTimeZone.tz(this.timestamp, timeZoneAEST).format("DD/MM/YYYY hh:mm:ss A");
    //this.localeTimezone = moment.tz(this.utcTimeZone).local().format("DD/MM/YYYY hh:mm A");
    this.localeTimezone = momentTimeZone.utc(this.timestamp).tz(timeZoneAEST).local().format("DD/MM/YYYY hh:mm:ss A");
    console.log("LOCAL-TIME-ZONE:::--",this.localeTimezone);
    this.initiateForm();
  }

  initiateForm(){
    this.selectFormGrp = this.fb.group({
      selectZone: new FormControl('')
    })
  }
  selectedZones(evt:any){
    console.log("Selected Zoned",evt.target.value);
    var timestamp = new Date().getTime();
    this.utcTimeZone =  momentTimeZone.tz(timestamp, evt.target.value).format("DD/MM/YYYY hh:mm:ss A");
    //this.localeTimezone = moment.tz(this.utcTimeZone).local().format("DD/MM/YYYY hh:mm A");
    this.localeTimezone = momentTimeZone.utc(timestamp).tz(evt.target.value).local().format("DD/MM/YYYY hh:mm:ss A");
    console.log("LOCAL-TIME-ZONE:::--",this.localeTimezone);
  }

  selectedZonesById(evt:any){
    console.log("Selected Zone By Id",evt.target.value);

    let getZoneFromId:any;

    this.timeZones.forEach((zonId:any)=>{
      if(zonId.zoneId === evt.target.value){
        getZoneFromId = zonId.zoneName;
      }
    });
    console.log("Selected Zone name",getZoneFromId);
    var timestamp = new Date().getTime();
    this.utcTimeZone =  momentTimeZone.tz(timestamp, getZoneFromId).format("DD/MM/YYYY hh:mm:ss A");
    //this.localeTimezone = moment.tz(this.utcTimeZone).local().format("DD/MM/YYYY hh:mm A");
    this.localeTimezone = momentTimeZone.utc(timestamp).tz(getZoneFromId).local().format("Do MMM  hh:mm:ss A");
    console.log("LOCAL-TIME-ZONE:::--",this.localeTimezone);
  }
}
