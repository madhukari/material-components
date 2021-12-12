import { Component, OnInit } from '@angular/core';
import { Employee } from '../modals/employee';
import { WebService } from '../services/web.service';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  message:any;

  constructor(public service:WebService
    // public employee:Employee
    ) { }

  ngOnInit(): void {
    this.getData();
    // this.message='from tab comp'
  }
  setMessage(e:any){
    this.message=e;
  }
   
  getData(){
    this.service.getData().subscribe((res:any)=>{console.log('hh',res)});

}
}
