import { Injectable } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  
    addTodo(title: string): void {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        title,
        completed: false
      };
      this.todos.push(newTodo);
      console.log('Tarefa adicionada:', newTodo);
    }


  getTodos(): Todo[] {
    return this.todos;
  }

  getCompletedTodos(): Todo[] {
    console.log(`Getting completed todos: ${this.todos.filter(todo => todo.completed).length}`); // Log para verificar quantas completas
    return this.todos.filter(todo => todo.completed);
  }

  getPendingTodos(): Todo[] {
    console.log(`Getting pending todos: ${this.todos.filter(todo => !todo.completed).length}`); // Log para verificar quantas pendentes
    return this.todos.filter(todo => !todo.completed);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleComplete(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      console.log(`Toggled complete for todo: ${todo.title}`); // Log para verificar a alteração
    } else {
      console.log(`Todo with id ${id} not found`); // Log se o ID não for encontrado
    }
  }
}
