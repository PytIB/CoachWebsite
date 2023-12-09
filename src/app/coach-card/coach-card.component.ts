import { Component, Input } from '@angular/core';
import { GetCoachServiceService } from '../get-coach-service.service';
@Component({
  selector: 'app-coach-card',
  templateUrl: './coach-card.component.html',
  styleUrls: ['./coach-card.component.css']
})
export class CoachCardComponent {
  @Input() imageUrl: string | undefined;
  @Input() titleAndName: string | undefined;
  @Input() fidePeakRatingLink: string | undefined;
  @Input() successes: string[] | undefined;
  @Input() rate:  string | undefined;
  @Input() bookLessonLink: string | undefined;
  @Input() aboutLessonsLink: string | undefined;

  coachData = {}
  constructor(private getCoachService:GetCoachServiceService){}
  ngOnInit() {
    if (this.imageUrl && this.titleAndName && this.fidePeakRatingLink) {
      this.print_data();
    }
  }




  print_data(){
    console.log("Image:",this.imageUrl)
    console.log("titleAndName:",this.titleAndName)
    console.log("fide peak rating:",this.fidePeakRatingLink);
  }
  transformTitle(titleAndName: string | undefined): string {
    // Implement your transformation logic here, for example, replacing spaces with hyphens
    return titleAndName ? titleAndName.replace(/\s+/g, '-') : '';
  }
  bookaLesson(){
    
    this.getCoachService.setSelectedCoach(
      {
        "imgUrl":this.imageUrl,
        "name": this.titleAndName,
        "fidePeakRatingLink": this.fidePeakRatingLink,
        "successes": this.successes,
        "rate": this.rate

      }
    )
  }
}
