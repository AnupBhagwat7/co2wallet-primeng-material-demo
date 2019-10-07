import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../components/bcd-section/nar/nar.component';

@Injectable({
  providedIn: 'root'
})
export class RecStrategyService {

  // Main api url to call api
  uri = 'http://localhost:4000/employees';
  employees : Employee[];

  constructor(private http: HttpClient) { 
    this.employees = [
      {firstName: "Anup",lastName: "Bhagwat", email: "anup.bhagwat7@gmail.com", phone: "9960617053"},
      {firstName: "Anup",lastName: "Bhagwat", email: "anup.bhagwat7@gmail.com", phone: "9960617053"},
      {firstName: "Anup",lastName: "Bhagwat", email: "anup.bhagwat7@gmail.com", phone: "9960617053"},
      {firstName: "Anup",lastName: "Bhagwat", email: "anup.bhagwat7@gmail.com", phone: "9960617053"},
      {firstName: "Anup",lastName: "Bhagwat", email: "anup.bhagwat7@gmail.com", phone: "9960617053"},
      {firstName: "Anup",lastName: "Bhagwat", email: "anup.bhagwat7@gmail.com", phone: "9960617053"},
      {firstName: "Anup",lastName: "Bhagwat", email: "anup.bhagwat7@gmail.com", phone: "9960617053"},
      {firstName: "Anup",lastName: "Bhagwat", email: "anup.bhagwat7@gmail.com", phone: "9960617053"},
      {firstName: "Anup",lastName: "Bhagwat", email: "anup.bhagwat7@gmail.com", phone: "9960617053"},
      {firstName: "Anup",lastName: "Bhagwat", email: "anup.bhagwat7@gmail.com", phone: "9960617053"}
    ];
  }

  // To Get The List Of Employee
  getEmployees() {
    /* return this
      .http
      .get(`${this.uri}`); */

    return this.employees;  
  }

  // To Get Employee Details For Single Record Using Id
  getEmployeeById(empid) {
    return this.http.get(`${this.uri}/editEmployee/${empid}`);
  }

  // To Updated Specific Employee
  updateEmployee(id, body) {
    return this.http.post(`${this.uri}/updateEmployee/${id}`, body);
  }

  // To Create/Add New Employee
  addEmployee(body) {
    return this.http.post(`${this.uri}/addEmployee`, body);
  }

  // To Delete Any Employee
  deleteEmployee(empid) {
    return this.http.get(`${this.uri}/deleteEmployee/${empid}`);
  }
}
