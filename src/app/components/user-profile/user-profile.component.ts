import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private router : Router,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.displayAddNar = true;
    this.initializeNarForm();
  }

  initializeNarForm(){
    this.formGroup = this.formBuilder.group({
      fName: ['', [Validators.required]],
      lName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      age: ['', [Validators.required]],
      });
  }

  goBack(): void {
    //this.router.navigate(['.'], { relativeTo: this.activeRoute.parent });
    //this.router.navigate(['/home/add-bcd/nar']);
    //this.displayAddNar = false;
    console.log("Back clicked= ");
    //this.valueChange.emit(this.displayAddNar);
  }


}
