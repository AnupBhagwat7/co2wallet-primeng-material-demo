import { Component, OnInit } from '@angular/core';
import { FunctionService } from './../../../services/function.service';
import { Func } from './../../../model/function';
import { SelectItem } from 'primeng/components/common/api';
import { Router } from '@angular/router';

@Component({
  selector: 'functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {

/*   functions: Func[];
  constructor(private functionService: FunctionService) {

   }

  ngOnInit() {
    this.functions = this.functionService.getFunctions();
  } */

  functions1: Func[];

  functions2: Func[];

  values: SelectItem[];

  clonedFuncs: { [s: string]: Func; } = {};

  displayList1 = true;
  constructor(private functionService: FunctionService, private router :Router) { }

  ngOnInit() {
    //this.functionService.getFunctions().then(funtions => this.funtions1 = funtions);
    //this.functionService.getFunctions().then(funtions => this.funtions2 = funtions);
    this.displayList1 = true;
    this.functions1 = this.functionService.getFunctions();
    this.functions2 = this.functionService.getFunctions();

    this.values = [
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
  }

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
