import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from 'src/app/services/todo.service';
import { ItemListComponent } from './item-list/item-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoappComponent } from './todoapp/todoapp.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    AddTodoComponent,
    TodoappComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
