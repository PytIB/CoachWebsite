import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCoachServiceService {

  constructor() { }
  selectedCoach: any;

  setSelectedCoach(coach: any) {
    this.selectedCoach = coach;
  }

  getSelectedCoach() {
    return this.selectedCoach;
  }
}
