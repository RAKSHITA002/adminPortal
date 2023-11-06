import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User{
  id : number;
  firstName : string,
  lastName : string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : Array<User>=[
    {
      id : 1,
      firstName : 'Rakshita',
      lastName : 'Kashyap'
    },
    {
      id : 2,
      firstName : 'Aditi',
      lastName : 'Mahato'
    },
    {
      id : 3,
      firstName : 'Dipti',
      lastName : 'Singh'
    },
    {
      id : 4,
      firstName : 'Ria',
      lastName : 'Agrawal'
    }
  ]
  getUsers(): User[] {
    return this.users;
  }

  
  createUser(user : User){
    user.id = this.users.length + 1;
    this.users.push(user);
}
constructor(private router:Router) { }

deleteUser(user: User) {
  const index = this.users.findIndex((u) => u.id === user.id);
  if (index !== -1) {
    this.users.splice(index, 1);
  }
  this.router.navigate(['users']);
}
}
