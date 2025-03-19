
import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
// @Input() user:string='';
// @Input() user:string='';
@Output() handleuser=new EventEmitter();
user=['anil','peter','brue','red']
ngOnInit(){
  this.handleuser.emit(this.user);

}

  

}
