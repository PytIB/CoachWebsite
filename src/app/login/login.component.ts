import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private httpClient: HttpClient, private router:Router){}
  @ViewChild('loginForm')
  login_form!: NgForm;
  responseMessage: boolean | undefined;

  onLoginSubmit(){
    if(this.login_form.valid){
      let login_data = this.login_form.value
      console.log(login_data)
      this.submit_data(login_data)
    }
  }

  submit_data(data:any){
    this.httpClient.post('http://localhost:5000/login',data).subscribe(
        {
          next: (response) => {
              
            const jsonResponse = response as any;
            this.responseMessage = jsonResponse.message;
            console.log("Authorization Granted:",this.responseMessage)

            if(this.responseMessage === true){
              this.router.navigate(['admin'])
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
