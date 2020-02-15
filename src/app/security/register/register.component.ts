import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MyErrorStateMatcher } from 'src/app/utils/MyErrorStateMatcher';

@Component({
  selector: 'hamel-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public formGroup: FormGroup;
  public hide = true;
  public matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  public ngOnInit(): void {
    this.buildForm();
  }

  get email() {
    return this.formGroup.get('email');
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        password2: ['', [Validators.required]]
      },
      { validator: this.checkPasswords }
    );
  }

  public checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('password2').value;
    return pass === confirmPass ? null : { notSame: true };
  }

  public getErrorMessageEmail(): string {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  public register() {
    const user = this.formGroup.value;
    console.log(user);
    this.userService.register(user).subscribe(response => {
      if (response) {
        console.log(response);
        this.formGroup.reset();
      }
    });
  }
}
