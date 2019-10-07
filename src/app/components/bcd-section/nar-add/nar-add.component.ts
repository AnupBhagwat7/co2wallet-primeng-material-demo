import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nar-add',
  templateUrl: './nar-add.component.html',
  styleUrls: ['./nar-add.component.css']
})
export class NarAddComponent implements OnInit {

  formGroup: FormGroup;
  //displayAddNar :boolean;

  @Output() valueChange = new EventEmitter();
  displayAddNar : boolean;

  constructor(private formBuilder: FormBuilder, private router : Router,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.displayAddNar = true;
    this.initializeNarForm();
  }

  initializeNarForm(){
    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      });
  }

  toToNarList(){
    this.router.navigate(['../nar']);
  }

  goBack(): void {
    //this.router.navigate(['.'], { relativeTo: this.activeRoute.parent });
    //this.router.navigate(['/home/add-bcd/nar']);
    this.displayAddNar = false;
    console.log("Back clicked= "+ this.displayAddNar);
    this.valueChange.emit(this.displayAddNar);
  }
}
