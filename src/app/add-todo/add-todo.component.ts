import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  @Output() AddtodoEvent: EventEmitter<string> = new EventEmitter();
  nameOfTodo = '';

  sendTodo() {
    this.AddtodoEvent.emit(this.nameOfTodo);
    this.nameOfTodo = '';
  }
}
