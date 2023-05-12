import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm();
  }

  loginForm() {
    this.loginFormGroup = new FormGroup({
      identifier: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onLogIn() {
    if (this.loginFormGroup.valid) {
      this.authService.logIn(
        this.loginFormGroup.value
      ).subscribe((res: any) => {                
       this.authService.setToken( res.jwt)       
        this.router.navigate(['/admin/home'])
      }, (error) => {
             console.log(error)
      })
    } 
  }

  onRegister(event: any){
    console.log(event);
    
    this.router.navigate(['./signup']);
    event.preventDefault();
  }











}
