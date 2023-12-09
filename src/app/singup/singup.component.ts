import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  constructor(private httpClient: HttpClient, private router: Router){}
  @ViewChild('signupForm')
  signupForm!: NgForm;
  passwordsMatch: boolean | undefined;


  onSignUpSubmit() {
    
    console.log('Form submitted:', this.signupForm.value);
    delete this.signupForm.value.confirmPassword;
    var registration_data = this.signupForm.value
    this.submit_data(registration_data)
  }

  

    checkPasswords() {
      const passwordControl = this.signupForm.form.get('password');
      const confirmPasswordControl = this.signupForm.form.get('confirmPassword');
      console.log("funtion called")
      if (passwordControl && confirmPasswordControl) {
        console.log("password:",passwordControl.value)
        console.log("confirm password:",confirmPasswordControl.value)
        this.passwordsMatch = passwordControl.value === confirmPasswordControl.value;
        console.log("Password Match:",this.passwordsMatch)
      } else {
        this.passwordsMatch = false;
      }
    }
    submit_data(data:any){
      this.httpClient.post('http://localhost:5000/register',data).subscribe(
          {
            next: (response) => {
                
              
            console.log("Response:",response)
  
            
              
            },
            error: (error) => {
              console.log(error)
              alert("Error occured");
            }
          }
        )
        
        
  
    }
}

