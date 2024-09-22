import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCheckboxModule,
    AppComponent,
    TodoListComponent,
  ],
  providers: [TodoService],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
