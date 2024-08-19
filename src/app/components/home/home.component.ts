import { Component } from '@angular/core';
import { ApiServices } from 'src/app/services/api-services.service';
import { CreaModel } from 'src/app/Model/AppModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private services: ApiServices) {}

  allCrew: CreaModel[] = []

  ngOnInit(): void {
    this.getAllCrewList();
  }

  getAllCrewList() {
    this.services.getCrewList().subscribe(
      {
        next: (data: any) => {
          this.allCrew = data;
        },
        error: (err: Error) => {
          console.log(err)
        }
      }
    )
  }
}
