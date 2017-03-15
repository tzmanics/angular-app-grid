import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor-grid',
  templateUrl: './sponsor-grid.component.html',
  styleUrls: ['./sponsor-grid.component.scss']
})
export class SponsorGridComponent implements OnInit {
  sponsorGridData = [{
    Company: 'Max Technical Training',
    Location: 'Mason',
    Capacity: 100,
    Contact: 'Amy Peters',
    Email: 'amy@max.com',
    Tech: true,
    Code: 'any'
  },{
    Company: 'Urban Artifacts Brewery',
    Location: 'Northside',
    Capacity: 250,
    Contact: 'Brenda Quartz',
    Tech: false,
    Code: 'any'
  },{
    Company: 'Roadtrippers',
    Location: 'OTR',
    Capacity: 25,
    Contact: 'Chris Riddle',
    Email: 'chris@roadtrippers.com',
    Tech: true,
    Code: 'Node/JavaScript'
  },{
    Company: 'Kroger',
    Location: 'Downtown',
    Contact: 'Dana Smith',
    Email: 'dana@kroger.com',
    Tech: false,
    Code: 'Node/JavaScript/Java'
  },{
    Company: 'Oodle',
    Location: 'Loveland',
    Capacity: 10,
    Contact: 'Erin Twill',
    Email: 'erin@oodle.com',
    Tech: true,
    Code: 'PHP'
  },{
    Company: 'Zipscene',
    Location: 'Downtown',
    Capacity: 20,
    Contact: 'Erin Thompson',
    Email: 'erin@zipscene.com',
    Tech: true,
    Code: 'Node'
  },{
    Company: 'Github',
    Contact: 'Farrah Ulen',
    Email: 'farrah@github.com',
    Tech: true,
    Code: 'git'
  },{
    Company: 'Uptech',
    Location: 'Convington',
    Capacity: 20,
    Contact: 'Georgia Vukelic',
    Email: 'georgia@uptech.com',
    Tech: true
  },{
    Company: 'Cintrifuse',
    Location: 'Union Hall',
    Capacity: 50,
    Contact: 'Hillary West',
    Email: 'hillary@cintrifuse.com',
    Tech: false,
    Code: 'any'
  }];

  constructor() { }

  ngOnInit() {
  }

}
