import { Component } from '@angular/core';
import { ITodo } from './todoList/todointerface';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalclose: boolean = true;

  dateInput = new FormControl();
  timeInput = new FormControl();
  taskInput = new FormControl();
  userInput = new FormControl();



  toDoLists: ITodo[] = [
    {taskName: 'Meet with rupal',taskdate: new Date("6/12/1990"),taskTime: 12.09,taskDoneBy:'gaurav'},
    {taskName: 'Meet with Zaheen',taskdate: new Date("1/20/2019"),taskTime: 12.09,taskDoneBy:'gaurav'},
    ];
deleteTodo(todo :ITodo){
const itemindex=this.toDoLists.findIndex(i => i === todo);
this.toDoLists.splice(itemindex,1);
}

addTodo(){
const todo: ITodo ={
taskdate:  this.dateInput.value,
taskTime: this.timeInput.value,
taskName: this.taskInput.value,
taskDoneBy: this.userInput.value
}
this.toDoLists.push(todo);
this.dateInput.setValue('');
this.timeInput.setValue('');
this.taskInput.setValue('');
this.userInput.setValue('');
this.modal.hide();

}
  title = 'mdb-angular-free';
}
