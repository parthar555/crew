import { Component, HostListener, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder, private services: ApiServices) {
    const StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
    this.userForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
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

  saveUserDetails() {
    if (this.userForm.invalid) {
      this.userForm.get('firstName')?.markAsTouched();
      this.userForm.get('lastName')?.markAsTouched();
      this.userForm.get('email')?.markAllAsTouched();
      this.userForm.get('password')?.markAllAsTouched();
      this.userForm.get('reTypePassword')?.markAllAsTouched();
      return;
    }
    const data: any = {
      firstName: this.userForm.get('firstName')?.value,
      lastName: this.userForm.get('lastName')?.value,
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value
    }
    this.services.saveUser(data).subscribe((res) => {
      console.log('kkkkkkk', res)
    })
  }

}
