import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-accordion',
  templateUrl: './mat-accordion.component.html',
  styleUrls: ['./mat-accordion.component.css']
})
export class MatAccordionComponent implements OnInit {
  panelOpenState: boolean = false;
  allExpandState = false;
   _DATA = [{name:'madhu',id:'9',expand:true},{name:'kk',id:'29',expand:false}];

  constructor() { }

  ngOnInit(): void {
  }
  expandCollospse(type:number){
    debugger
  if(type ==1){
    this._DATA.forEach(item=>item.expand=true);
  }
  else{
    this._DATA.forEach(item=>item.expand=false);
  }
  }


}
