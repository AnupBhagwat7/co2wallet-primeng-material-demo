import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recovery-strategy',
  templateUrl: './recovery-strategy.component.html',
  styleUrls: ['./recovery-strategy.component.css']
})
export class RecoveryStrategyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //add Employee
  addNar() {
    this.router.navigate(['./nar-add']);
  }
}
