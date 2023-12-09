import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private httpClient: HttpClient){}
  @ViewChild('CoachForm')
  form!: NgForm;
  collected_Data :any = []
  add_Coach = false;
  onSubmit(){
    if(this.form.valid){
      let coachData = this.form.value
      coachData.success = coachData.success.split(',').map((item: string) => item.trim());
      console.log("Collected Coach Data:",coachData)
      this.submit_data(coachData)
    }
  }

  addCoach(){
    this.add_Coach = true;
  }
  submit_data(data:any){
    this.httpClient.post('http://localhost:5000/insert-coach',data).subscribe(
        {
          next: (response) => {
            console.log(response)
            alert("Data was successfully Posted")
            if(response.hasOwnProperty('error')){
              alert("Wrong Date Input");
            }
          },
          error: (error) => {
            console.log(error)
            alert("Error occured");
          }
        }
      )
      
      

}
  
}
