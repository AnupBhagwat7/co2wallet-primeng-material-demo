import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recstrategy-section',
  templateUrl: './recstrategy-section.component.html',
  styleUrls: ['./recstrategy-section.component.css']
})
export class RecstrategySectionComponent implements OnInit {
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.rsActiveLinkIndex = this.rsNavLinks.indexOf(this.rsNavLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  rsNavLinks: any[];
  rsActiveLinkIndex = -1;

  constructor(private router: Router) {

    this.rsNavLinks = [
      {
        label: 'NAR',
        path: 'nar',
        index: 4
      }, {
        label: 'Functions',
        path: 'functions',
        index: 5
      }, {
        label: 'Recovery Strategy',
        path: 'recovery-strategy',
        index: 6
      }
    ];
  }


}
