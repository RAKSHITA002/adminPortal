import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
interface User{
  id : number;
  firstName : string,
  lastName : string,
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {


constructor(private router :Router, private service : UserService){
}

displayedColumns: string[] = ['id' , 'firstName', 'lastName', 'actions'];
users: User[] = [];

ngOnInit() {
  this.users = this.service.getUsers();
}


  editUser(id : number){
    this.router.navigate(['edit-user', id]);
    console.log(id);
  }

  deleteUser(element: User) {
    console.log('Deleting user from component:', element);
    alert("Delete");
    this.service.deleteUser(element);
    this.users = this.service.getUsers();
    console.log('Updated users in component:', this.users);    
  }

}
