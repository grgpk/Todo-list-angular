import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Item } from '../types/todo.type';
import { uniqId } from '../utils/randomId';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.scss'],
})
export class TodoappComponent implements OnInit {
  todoList!: Array<Item>;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoList = this.todoService.todoList;
  }

  addItem(name: string) {
    if (name) {
      this.todoService.addItem({
        name,
        completed: false,
        id: uniqId(),
      });
    }
    this.updateList();
  }

  removeItem(item: Item) {
    this.todoService.removeItem(item);
    this.updateList();
  }

  markCompleted(item: Item) {
    this.todoService.markCompleted(item);
    this.updateList();
  }

  updateList() {
    this.todoList = this.todoService.getList();
  }
}
