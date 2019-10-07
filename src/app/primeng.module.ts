import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { AccordionModule } from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import { DropdownModule, PanelModule, ButtonModule, TabMenuModule } from 'primeng/primeng';

@NgModule({
  imports: [AccordionModule,MegaMenuModule,TableModule,DropdownModule,ButtonModule,PanelModule,TabMenuModule
  
],
  exports: [AccordionModule,MegaMenuModule,TableModule,DropdownModule,ButtonModule,PanelModule,TabMenuModule
  ],
})
export class CustomPrimengModule { }