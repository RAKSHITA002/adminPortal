import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  userData : FormGroup;

  constructor(private service : UserService){
    this.userData = new FormGroup({
        'firstName' : new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
        'lastName' : new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
        'password' : new FormControl('', Validators.required),
        'confirmPassword' : new FormControl('', Validators.required),
    })
  }

}
