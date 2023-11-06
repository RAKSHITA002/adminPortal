import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  userData : FormGroup;

  constructor(private service : UserService){
    this.userData = new FormGroup({
        'firstName' : new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
        'lastName' : new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)])
    })
  }

  createUser(){
    console.log(this.userData.value);
    this.service.createUser(this.userData.value);
  }
}
