import { Component } from '@angular/core';
import { GetCoachServiceService } from '../get-coach-service.service';

@Component({
  selector: 'app-bookalesson',
  templateUrl: './bookalesson.component.html',
  styleUrls: ['./bookalesson.component.css']
})
export class BookalessonComponent {
  constructor(private coachingService:GetCoachServiceService){}

  selectedCoach:any 

  ngOnInit() {
    this.selectedCoach = this.coachingService.getSelectedCoach();
  }
}
