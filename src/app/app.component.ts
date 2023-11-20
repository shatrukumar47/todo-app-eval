import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, TodoInputComponent, TodoListComponent, SingleTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
