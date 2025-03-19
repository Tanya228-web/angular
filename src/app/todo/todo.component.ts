import { TodoService } from './../services/todo.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { todos } from '../interface/todo';
@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  constructor(private todo: TodoService) {}
  todi: { _id: string; title: string; description: string }[] = [];

  ngOnInit() {
    this.gettodos();
  }

  addtodo(task: any) {
    let res = this.todo.addtask(task);
    res.subscribe({
      next: (data: any) => {
        console.log(data);
        this.gettodos();
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }
  gettodos() {
    let res = this.todo.gettask();
    res.subscribe({
      next: (data: any) => {
        data.data.forEach((d: any, index: number) => {
          this.todi[index]={_id:d._id,title:d.title,description:d.description}
        
        
        });

      },
      error: (error) => {
        console.log('error', error);
      },

    });
    console.log(this.todi)
  }
  deletetodo(id:string){
    let res=this.todo.deletetask(id)
    res.subscribe({
      next:(data:any)=>{
        console.log(data);
        this.gettodos();

      },
      error:(error)=>{console.log("error",error)}
      
    })
  


  }
}
