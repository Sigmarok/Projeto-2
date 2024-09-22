import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatCheckboxModule]
})
export class TodoListComponent implements OnInit {
  pendingTodos: Todo[] = [];
  completedTodos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.pendingTodos = this.todoService.getPendingTodos();
    this.completedTodos = this.todoService.getCompletedTodos();
    console.log('Pending Todos:', this.pendingTodos);
    console.log('Completed Todos:', this.completedTodos);
  }



  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.loadTodos(); // Atualiza as listas
  }

  toggleComplete(id: number): void {
    this.todoService.toggleComplete(id);
    this.loadTodos(); // Atualiza as listas
  }
}
