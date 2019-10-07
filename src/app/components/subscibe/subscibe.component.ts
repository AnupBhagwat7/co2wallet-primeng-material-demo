import { Component, OnInit } from '@angular/core';
import { Func } from 'src/app/model/function';
import { SelectItem } from 'primeng/components/common/api';
import { FunctionService } from 'src/app/services/function.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'subscribe',
  templateUrl: './subscibe.component.html',
  styleUrls: ['./subscibe.component.css']
})
export class SubscibeComponent implements OnInit {
 
  functions1: Func[];

  functions2: Func[];

  
  users1: User[];

  users2: User[];

  values: SelectItem[];

  clonedFuncs: { [s: string]: Func; } = {};

  displayList1 = true;
  constructor(private functionService: FunctionService, private userService : UserService, private router :Router) { }

  ngOnInit() {
    //this.functionService.getFunctions().then(funtions => this.funtions1 = funtions);
    //this.functionService.getFunctions().then(funtions => this.funtions2 = funtions);
    this.displayList1 = true;
    //this.functions1 = this.functionService.getFunctions();
    //this.functions2 = this.functionService.getFunctions();

    
    this.users1 = this.userService.getDummyUsers();
    this.users2 = this.userService.getDummyUsers();

/*     this.values = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
 */  }

  onRowEditInit(fun : Func) {
    this.clonedFuncs[fun.name] = { ...fun };
  }

  onRowEditSave(fun: Func) {
    if (fun.year > 0) {
      delete this.clonedFuncs[fun.name];
      //this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Func is updated' });
    }
    else {
      //this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Year is required' });
    }
  }

  onRowEditCancel(fun: Func, index: number) {
    this.functions2[index] = this.clonedFuncs[fun.name];
    delete this.clonedFuncs[fun.name];
  }

  //add Employee
addFunction(){
  this.router.navigateByUrl('/home/add-bcd/functions/nar-add');
  this.displayList1 = false;
}

}
