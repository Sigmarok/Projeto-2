import { TodoService } from '../todo.service';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardActions } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  standalone: true,
  imports: [MatFormField, MatLabel, FormsModule, MatCard, MatCardTitle, MatCardActions, MatCardContent, MatFormFieldModule, MatInputModule]
})
export class AddTodoComponent {
  @Output() todoAdded = new EventEmitter<void>();
  title: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.title.trim()) {
      this.todoService.addTodo(this.title);
      this.todoAdded.emit(); // Emite o evento
      console.log(`Todo added: ${this.title}`); // Log para verificar a adição
      this.title = ''; // Limpa o campo após adicionar
    }
    else{
      console.log('Input is empty, not adding todo'); // Log se o campo estiver vazio
    }
  }
}
