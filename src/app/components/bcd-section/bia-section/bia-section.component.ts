import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bia-section',
  templateUrl: './bia-section.component.html',
  styleUrls: ['./bia-section.component.css']
})
export class BiaSectionComponent implements OnInit {

  biaNavLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.biaNavLinks = [
      {
        label: 'NAR',
        link: 'nar',
        index: 0
      }, {
        label: 'Functions',
        link: 'functions',
        index: 1
      }, {
        label: 'Recovery Strategy',
        link: 'recovery-strategy',
        index: 2
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.biaNavLinks.indexOf(this.biaNavLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }
}
