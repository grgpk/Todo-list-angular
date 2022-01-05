import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Item } from '../types/todo.type';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  @Input() todoList!: Array<Item>;
  @Output() itemCompleteEvent: EventEmitter<Item> = new EventEmitter();
  @Output() itemRemoveEvent: EventEmitter<Item> = new EventEmitter();
  constructor() {}

  itemComplete(item: Item) {
    this.itemCompleteEvent.emit(item);
  }

  itemRemove(item: Item) {
    this.itemRemoveEvent.emit(item);
  }
}
