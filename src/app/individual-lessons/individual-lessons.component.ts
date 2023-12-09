import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-individual-lessons',
  templateUrl: './individual-lessons.component.html',
  styleUrls: ['./individual-lessons.component.css']
})
export class IndividualLessonsComponent {
  constructor(private coachService:CoachService){}
  coachData:any[] = [];
  ngOnInit(){
    this.get_coaches()
   
  }

  get_coaches(){
    this.coachService.get_coaches().subscribe(
      {
        next: (response) => {
          this.coachData = response
          console.log("Balance returned:",this.coachData)
          this.logCoachData();
        },
        error: (error) => {
          console.log(error)
        }
        
      }
    )

    
  }
  logCoachData() {
    for (const coach of this.coachData) {
      console.log("Image:", coach.img);
      console.log("titleAndName:", coach.name);
      console.log("Fide Peak Rating:", coach.peakRating);
      console.log("Successes:", coach.success);
      console.log("Rate:", coach.rate);
      console.log("---------------");  // Separate coach data with a line
    }
  }
  
}

