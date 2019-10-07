import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { RecStrategyService } from 'src/app/services/rec-strategy.service';
import { Router } from '@angular/router';

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'nar',
  templateUrl: './nar.component.html',
  styleUrls: ['./nar.component.css']
})

export class NarComponent implements OnInit {
  
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

cols: any[];
// Important objects
MyDataSource: any;
employeeList: Employee[];
displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'action'];

displayNarList = true;
displayNarAdd = false;

constructor(private service: RecStrategyService, private router: Router) {
  
}

ngOnInit() {
  this.displayNarList = true;
  this.displayNarAdd = false;

  console.log("From Init = "+ this.displayNarList +"  "+ this.displayNarAdd);
  this.getEmployees();

  this.cols = [
    { field: 'firstName', header: 'firstName' },
    { field: 'lastName', header: 'lastName' },
    { field: 'email', header: 'email' },
    { field: 'phone', header: 'phone' },
    { field: 'action', header: 'Action'}
  ];
}

// To Get List Of Employee
getEmployees() {
  this.employeeList = this.service
    .getEmployees();
  /* .subscribe((data: Employee[]) => {
    this.MyDataSource = new MatTableDataSource();
    this.MyDataSource.data = data;
    this.MyDataSource.paginator = this.paginator;
    this.MyDataSource.sort = this.sort;
  }); 
  https://www.dotnettricks.com/learn/angularmaterial/datatable-crud-operations-mean-stack
  */

}

// To Edit Employee
editEmployee(narid) {
  this.router.navigate([`/home/add-bcd/nar/editNar/${narid}`]);
}

//add Employee
addNar(){
  //this.router.navigateByUrl('/home/add-bcd/nar/nar-add');
  //this.router.navigate(['/home/add-bcd/nar/nar-add']);
  console.log("Before = "+ this.displayNarList  +"  "+ this.displayNarAdd);
  this.displayNarList = false;
  this.displayNarAdd = true;
  console.log("After ="+ this.displayNarList  +"  "+ this.displayNarAdd);
}

// Search specific result
filterEmployee(searchstring: string) {
  searchstring = searchstring.trim();
  searchstring = searchstring.toLowerCase();
  this.MyDataSource.filter = searchstring;
}

hideNarAdd(event){
  console.log("Event emiited "+ event);
  this.displayNarList = true;
  this.displayNarAdd = event;
}

}
