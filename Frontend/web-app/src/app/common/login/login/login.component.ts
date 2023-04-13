import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      identifier: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  signIn() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.apiService.onSignIn(
        this.formGroup.value
      ).subscribe((res) => {
        console.log(res?.jwt);
        localStorage.setItem('token', res.jwt)
        this.route.navigate(['/home'])
      })
    }
  }











}
