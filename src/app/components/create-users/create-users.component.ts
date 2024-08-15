import { Component, HostListener, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    const StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
    this.userForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(StrongPasswordRegx)]],
        reTypePassword: ['', [Validators.required]]
      },
      {
        validators: this.validatesPasswordEqual
      }
    );
  }
  
  public validatesPasswordEqual(c: AbstractControl) {
    return c.value.password === c.value.reTypePassword ? null : {passwordNotMatched: true}
  }
  

  ngOnInit(): void {
    
  }

}
