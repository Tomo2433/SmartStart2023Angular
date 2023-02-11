import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItems } from 'src/app/mocked-data';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItems;
  @Output() itemToDelete: EventEmitter<TodoItems> = new EventEmitter;
  @Output() itemToBeDone: EventEmitter<TodoItems> = new EventEmitter;

  deleteItem(): void {
    this.itemToDelete.emit(this.todoItem);
  }

  changeItemToBeDone(): void {
    this.itemToBeDone.emit(this.todoItem);
  }
}
