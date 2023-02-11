import { Component, Injectable } from '@angular/core';
import { TodoItems, TODO_ITEMS } from '../mocked-data';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  newItem: string = "Nowy element";
  todoItems: TodoItems[] = TODO_ITEMS;

  addItem(event: TodoItems): void {
    this.todoItems.push(event);
    //console.log(this.todoItems);
  }

  removeItem(event: TodoItems): void {
    this.todoItems = this.todoItems.filter(item => item.text !== event.text);
    //console.log(this.todoItems);
  }

  sortItems(): void {
    this.todoItems = this.todoItems.sort((a,b) => a.text.toLocaleLowerCase() < b.text.toLocaleLowerCase() ? -1 : 1);
    this.todoItems = this.todoItems.sort((a,b) => a.isDone < b.isDone ? -1 : 1);
  }

  itemIsDoneChange(event: TodoItems): void{
    this.todoItems.map(item=>item.text === event.text ? event.isDone=true:false);
  }
}