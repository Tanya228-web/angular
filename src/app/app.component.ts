

// import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
// import { NgIf } from '@angular/common';


// import { FormsModule, NgForm } from '@angular/forms';


import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],

  templateUrl: './app.component.html', // Ensure this path is correct
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
//   // products: User[] | undefined = [];
//   todi: any | undefined = [];
//   todo:{id:string,description:string,title:string}={
//     id: '',
//     description: '',
//     title: ''
//   };
//   constructor(private ps: ProductService, private http: HttpClient) {}
//   // datalist() {
//   //   this.ps.data().subscribe((datalist: any) => this.products=datalist.data.data);
//   //   console.log(this.products)

//   addDetail(tododetail: User) {
//     let url = 'https://api.freeapi.app/api/v1/todos/';
//     let res = this.http.post<User>(url, tododetail);
//     // console.log(tododetail)
//     res.subscribe((data: any) => console.log(data));
//     this.showdata();
//   }
//   showdata() {
//     let url = 'https://api.freeapi.app/api/v1/todos';
//     let res = this.http.get<User[]>(url);

//     // console.log(tododetail)
//     res.subscribe((data: any) => (this.todi = data.data));
//   }
//   ngOnInit() {
//     this.showdata();
//   }
//   deletetodo(id: string) {
//     let url = `https://api.freeapi.app/api/v1/todos/${id}`;
//     this.http.delete(url).subscribe({
//         next: (data: any) => {
//             console.log(data);
//             this.showdata(); // Call the function after successful deletion
//         },
//         error: (error) => console.error('Error deleting todo:', error)
//     });
    
// }
//   gettodo(id:string){
//     let url = `https://api.freeapi.app/api/v1/todos/${id}`;
//     this.http.get(url).subscribe({
//         next: (data: any) => {
//            this.todo={id:data.data._id,description:data.data.description,title:data.data.title};
//            console.log(this.todo)
      
//         },
//         error: (error) => console.error('Error get todo:', error)
//     });
   


//   }
//   updatetodo(id:string){
//     let url = `https://api.freeapi.app/api/v1/todos/${id}`;
//     this.http.patch(url,{description:this.todo.description,title:this.todo.title}).subscribe({
//         next: (data: any) => {
//             console.log(data);
//             this.showdata(); // Call the function after successful deletion
//         },
//         error: (error) => console.error('Error deleting todo:', error)
//     });

//   }



// }

// product: { productName: string; brand: string; price: number }[] | undefined;
// val:number|undefined=0;

// constructor(private productdata: ProductService) {}
// printdata() {
//   this.product = this.productdata.productdata();
//   console.log(this.product);
// }
// getsum(){

//  this.val= this.product?.reduce((acc,curr)=>(acc+curr.price),0)
// }

// user:string[]=[];
// getuser(user:string[]){
//   this.user=user;

// username:string='';
// usernameChanged(name:string){
//   this.username=name;
//
// users=['anil','sidhu','kartik','naina'];

// userdetails:any;
// addUser(val:NgForm){
//   console.log(val);
//   this.userdetails=val;

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
