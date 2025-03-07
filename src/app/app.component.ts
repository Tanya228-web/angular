// import { Component, signal, effect } from '@angular/core';
// import {FormsModule} from '@angular/forms';
// import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  // imports :[FormsModule,NgIf],
  // imports :[NgIf],
     imports : [RouterLink,RouterOutlet],

  templateUrl: './app.component.html',  // Ensure this path is correct
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  
  // task=""
  // taskList :{id:number,task:string}[]=[];
  // add(){
  //   this.taskList.push({id:this.taskList.length+1,task:this.task})
   
  //   this.task=""

  // }
  // remove(id:number){
  //   console.log(id)
  //   this.taskList=this.taskList.filter(item => item.id!==id )
    

  // }
  // users=["tanya","gaurav","modi","lavish","mahima"]



  // counter = signal(0);

  // constructor() {
  //   effect(() => {
  //     console.log(this.counter()); 
  //     console.log("tanya");// Properly using Angular's signal effect
  //   });
  // }

  // incrementvalue() {
  //   this.counter.set(this.counter() + 1);
  // }

  // decrementvalue() {
  //   this.counter.set(this.counter() - 1);
  // }


  // 
  // counter=signal(0);
  // constructor(){
  //   effect(()=>{
  //     console.log(this.counter());
  //   })
  // }
  
  // incrementvalue(){
  //   this.counter.set(this.counter()+1);

  // }
  
  // decrementvalue(){
  //   this.counter.set(this.counter()-1);

  // }
  // count=signal(10);
  // x=20;


  // value=0;
  // handleIncrement(){
  //   this.value++;
  // }
  // handleReset(){
  //   this.value=0;
  // }
  // handleDecrement(){
  //   if(this.value!=0)
  //     this.value--;
  // }
  // handleEvent(event:any){
  //   console.log("function called",event.target);
  //   console.log("function called",event.target.classList);

  // }


  // emailId="";
  // getName(event:any){
  //   this.name=event.target.value;
  
  //   console.log(event.target.value);
  // }
  // getvalue(){
  //   alert(this.name);

  // }
  // getEmail(email:any){
  //   this.emailId=email;
  //   console.log(email);


  // }




  




  

  // title :string|number= 'tanu';
  
  // abc(){
  //   console.log("gaurav");
  //   this.sum(10,20);
  //   alert("hululu");
  //   this.title="tanya";
  //   console.log(this.title);
  // };
  // sum(a:number,b:number){
  //   console.log(a+b);
    

 // }
//  value:boolean=false;
//  handleLogin(){

//   this.value=true;

//  }
//  handleLogout(){
//   this.value=false;

//  }


}


