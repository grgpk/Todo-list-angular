import { Injectable } from '@angular/core';
import { Item } from '../types/todo.type';

@Injectable()
export class TodoService {
  todoList: Array<Item> = [];

  getList() {
    return this.todoList;
  }

  addItem(item: Item): void {
    this.todoList = [...this.todoList, item];
  }

  removeItem(item: Item): void {
    this.todoList = this.todoList.filter((listItem) => listItem.id !== item.id);
  }

  markCompleted(item: Item): void {
    this.todoList = this.todoList.map((todoListItem) => {
      if (item.id === todoListItem.id) {
        return {
          ...todoListItem,
          completed: true,
        };
      }
      return todoListItem;
    });
  }
}
