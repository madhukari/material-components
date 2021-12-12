import { Component, VERSION, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
//   fb:FormGroup;
//   @ViewChild('select') select!: MatSelect; 

//  selectedRadio:any
// defTopins=[{"key":"6","value":"Chat"},{"key":"5","value":"E-Mail"}]
// separator:string='AND';

// constructor( ){
 
//   this.addDefaultValue();
// }
// onInit(){

// this.fb=new FormGroup({
//   selectedStringData : new FormControl()
// })
// }

// addDefaultValue(){
  
//   this.fb.setValue({"key":"6","value":"Chat"})
//   this.selectedStringData.push('"Chat"','"E-Mail"');
//   this.selectedData.push( {"key":"6","value":"Chat"});
//   this.selectedData.push( {"key":"5","value":"E-Mail"})
// }
//   allSelected = false;
//   selectedData:any[]=[];
//   selectedStringData:any[]=[];
//   radiAorray:any[]=['All','Any'];
//   foods: any[] = [
//     {"key":"6","value":"Chat"},{"key":"5","value":"E-Mail"},{"key":"5001","value":"Facebook"},{"key":"2","value":"Fax"},{"key":"4","value":"In Person"},{"key":"3","value":"Letter"},{"key":"5003","value":"LinkedIn"},{"key":"5005","value":"Messenger"},{"key":"1","value":"Phone"},{"key":"8","value":"Portal"},{"key":"5000","value":"SMS"},{"key":"5002","value":"Twitter"},{"key":"5004","value":"Viber"},{"key":"7","value":"VoIP"},{"key":"5006","value":"Website"} ];
//   toggleAllSelection() {
//     this.selectedData=[];
//     this.selectedStringData=[];
//     if (this.allSelected) {
//       for(let i=0;i<this.foods.length;i++){
//         this.selectedData.push( this.foods[i])
//         this.selectedStringData.push('"'+this.foods[i].value+'"');
//         }
//       this.select.options.forEach((item: MatOption) => item.select());
//     } else {
//       this.select.options.forEach((item: MatOption) => item.deselect());
//     } 
    
//   }
//   optionClick(item:any,evt:any) {
//     // if(this.selectedData.includes(item)){
//     //  let _id=this.selectedData.indexOf(item) 
//     //  this.selectedData.splice(1,_id) 
//     //  console.log( this.selectedData)
//     // }else{
//     // this.selectedData.push(item)
//     // }
//     if(this.selectedData.filter(chk=>(chk.key==item.key && chk.value==item.value)).length>0){
//      this.selectedData=this.selectedData.filter(chk=>(chk.key!=item.key && chk.value!=item.value))
//     }else{
//       this.selectedData.push(item);
//     }
//     this.selectedStringData=[];
//     for(let i=0;i<this.selectedData.length;i++){
//       this.selectedStringData.push('"'+this.selectedData[i].value+'"')
//     }
//     if(this.selectedData.length==this.foods.length){
//       this.allSelected=true;
//     }else{
//       this.allSelected=false;
//     }
//     // let newStatus = true;
//     // this.select.options.forEach((item: MatOption) => {
//     //   if (!item.selected) {
//     //     newStatus = false;
//     //   }
//     // });
//     // this.allSelected = newStatus;
//     // console.log('kk',this.toppings)
//     // if(this.toppings.value)
//   }

//   radioChange(){
//     if(this.selectedRadio==1){
//       this.separator=' AND '
//     }else{
//       this.separator=' OR '
//     } 
//   }
}
