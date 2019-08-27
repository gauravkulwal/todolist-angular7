import { ITodo } from './todointerface';
import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  @Input()
value: ITodo;
@Output()
todoDeleteEvent: EventEmitter<ITodo> = new EventEmitter<ITodo>();



deleteTodoHandle(){
  this.todoDeleteEvent.emit(this.value);
}
  constructor() { }

  ngOnInit() {
  }

}
