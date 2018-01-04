import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	users: User[] = [
		new User(1, 'Fredwin', 'Rosales', 'fredwinrosales@gmail.com'),
		new User(2, 'Freddy', 'Rosales', 'freddyrosale@hotmail.com'),
		new User(3, 'Youseli', 'Campos', 'youselicampos@gmail.com')
	];

  	constructor(private _userService: UserService) { }

  ngOnInit() {
  	//this.getUsers();
  }

  getUsers() {
  	/*this._userService.getUsers()
  		.then(users => this.users = users);*/
  }

  create(user: User) {
    this.users.push(user);
  }

  destroy(user: User) {
    const response = confirm("Confirm?");
    if(response) {
      const i = this.users.indexOf(user);
      this.users.splice(i, 1); 
    }
  }

  update(users: any) {
    const i = this.users.indexOf(users.original);
    this.users[i] = users.edited;
  }

}
