import { Component, OnInit } from '@angular/core';
import { MatMenuItem } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'add-bcd',
  templateUrl: './add-bcd.component.html',
  styleUrls: ['./add-bcd.component.css']
})
export class AddBcdComponent implements OnInit {
  ngOnInit(): void {
    this.router1.events.subscribe((res) => {
      this.activeLinkIndex = this.biaNavLinks.indexOf(this.biaNavLinks.find(tab => tab.link === '.' + this.router1.url));
  });

  this.router2.events.subscribe((res) => {
    this.rsActiveLinkIndex = this.rsNavLinks.indexOf(this.rsNavLinks.find(tab => tab.link === '.' + this.router2.url));
  });
  }

  rsNavLinks: any[];
  rsActiveLinkIndex = -1;
  biaNavLinks: any[];
  activeLinkIndex = -1;

  constructor(private router1: Router, private router2: Router) {

    this.rsNavLinks = [
      {
        label: 'NAR',
        path: './nar',
        index: 0
      }, {
        label: 'Functions',
        path: './functions',
        index: 1
      }, {
        label: 'Recovery Strategy',
        path: './recovery-strategy',
        index: 2
      },
    ];

    this.biaNavLinks = [
      {
        label: 'NAR',
        link: './nar',
        index: 3
      }, {
        label: 'Functions',
        link: './functions',
        index: 4
      }, {
        label: 'Recovery Strategy',
        link: './recovery-strategy',
        index: 5
      },
    ];
  }

}
