import { Component, OnInit } from '@angular/core';
import { ApiServices } from './services/api-services.service';
import { CreaModel } from './Model/AppModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'creaw-app';
  constructor(private services: ApiServices) {}

  allCrew: CreaModel[] = []

  ngOnInit(): void {
    this.getAllCrewList();
  }

  getAllCrewList() {
    this.services.getCrewList().subscribe((data) => {
      this.allCrew = data
    })
  }
}
