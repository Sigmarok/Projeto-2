import { Component } from '@angular/core';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCard } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [AddTodoComponent, TodoListComponent, MatToolbarModule, MatCard, MatCardTitle]
})
export class AppComponent {
  title = 'To-Do List Application';
pendingTodos: any;
}
