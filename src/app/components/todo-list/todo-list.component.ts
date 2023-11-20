import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todos: any = [];
  ngOnInit(): void {
    let data: any = localStorage.getItem('todos') || [];
    this.todos = JSON.parse(data);
  }
}
