import {Component,Input, OnInit, ViewChild, Output, EventEmitter} from '@angular/core'; 

 export interface imp{
   name:any;
   id:number;
 }

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {   
name:any
id:any
  @Input() message:any;
@Output()  newMessage = new EventEmitter<imp>(); 
  constructor( 
    // public employee:Employee
    ) {}
    ngOnInit(){}

    ngOnChanges(){
      // this.setMessage()
    }
    setMessage(e:any){
      // imp.name=this.name;
      // imp.id=this.id;
this.newMessage.emit(this.message=e.value)
    }

}
