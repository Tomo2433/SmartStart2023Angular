import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItems } from 'src/app/mocked-data';

@Component({
  selector: 'app-new-todoitem',
  templateUrl: './new-todoitem.component.html',
  styleUrls: ['./new-todoitem.component.css']
})
export class NewTodoitemComponent {
  @Output() addNewItem: EventEmitter<TodoItems> = new EventEmitter;

  newItem: string = "Nowy element";
  newItemCategory: string = "jedzenie";
  todoItem: TodoItems = {text:"", category: "", isDone: false};

  addItem(): void{
    this.todoItem = {text: this.newItem, category: this.newItemCategory, isDone: false};
    this.addNewItem.emit(this.todoItem);
    this.newItem = "";
  }
}
