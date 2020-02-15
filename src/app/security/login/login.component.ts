import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/utils/MyErrorStateMatcher';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hamel-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  public hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.buildForm();
  }

  get email() {
    return this.formGroup.get('email');
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login() {
    const user = this.formGroup.value;
    console.log(user);
    this.userService.login(user).subscribe(response => {
      if (response) {
        console.log(response);
        if (response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          if (response.roles[0] === 'ADMIN') {
            this.router.navigate(['admindashboard']);
          } else this.router.navigate(['userdashboard']);
        }
        console.log(response);
        this.formGroup.reset();
      }
    });
  }
}
