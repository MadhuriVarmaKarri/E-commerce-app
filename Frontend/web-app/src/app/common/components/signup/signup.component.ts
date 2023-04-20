import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { SignUp } from '../../models/response.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signUpFormGroup! : FormGroup;

  constructor(private apiService: ApiService, private router: Router){}

  ngOnInit(): void {
    this.signUpForm();
  }

  signUpForm(){
    this.signUpFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSignUp(){
     if(this.signUpFormGroup.valid){
        //  console.log(this.signUpFormGroup.value);
        this.apiService.signUp(this.signUpFormGroup.value)
        .subscribe((res: SignUp)=>{
           console.log(res);
           this.router.navigate(['/login'])     
        }, (error) => {
          if(error.status === 400){
              //console.log(error)
              alert("Email or Username are already taken.. Try with other credentials")
          }
       })
     }
  }
}
