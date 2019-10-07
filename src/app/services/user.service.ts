import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "http://localhost:8081/api/";

  users: User[];
  constructor(private http: HttpClient) {

    this.users = [
      { id: 1, fName: "Anup", lName: "Bhagwat", email: "anup.bhagwat7@gmail.com", age: 30, mobile: 9960617053 },
      { id: 2, fName: "Anup", lName: "Bhagwat", email: "anup.bhagwat7@gmail.com", age: 30, mobile: 9960617053 },
      { id: 3, fName: "Anup", lName: "Bhagwat", email: "anup.bhagwat7@gmail.com", age: 30, mobile: 9960617053 },
      { id: 4, fName: "Anup", lName: "Bhagwat", email: "anup.bhagwat7@gmail.com", age: 30, mobile: 9960617053 },
      { id: 5, fName: "Anup", lName: "Bhagwat", email: "anup.bhagwat7@gmail.com", age: 30, mobile: 9960617053 },
      { id: 6, fName: "Anup", lName: "Bhagwat", email: "anup.bhagwat7@gmail.com", age: 30, mobile: 9960617053 },
      { id: 7, fName: "Anup", lName: "Bhagwat", email: "anup.bhagwat7@gmail.com", age: 30, mobile: 9960617053 },
      { id: 8, fName: "Anup", lName: "Bhagwat", email: "anup.bhagwat7@gmail.com", age: 30, mobile: 9960617053 },
      { id: 9, fName: "Anup", lName: "Bhagwat", email: "anup.bhagwat7@gmail.com", age: 30, mobile: 9960617053 },
      { id: 10, fName: "Anup", lName: "Bhagwat", email: "anup.bhagwat7@gmail.com", age: 30, mobile: 9960617053 },
      { id: 11, fName: "Anup", lName: "Bhagwat", email: "anup.bhagwat7@gmail.com", age: 30, mobile: 9960617053 },

    ];
}

getUsers() {
  return this.http.get<User[]>(this.apiUrl + 'users');
}

getDummyUsers() {
  return this.users;
}

deleteUser(userId: number){
  return this.http.delete(this.apiUrl + 'user/' + userId);
}

addUser(user: User){
  console.log(user);
  return this.http.post(this.apiUrl + 'user/', user);
}

editUser(user: User){
  console.log(user);
  return this.http.put(this.apiUrl + 'user/', user);
}
  
}
