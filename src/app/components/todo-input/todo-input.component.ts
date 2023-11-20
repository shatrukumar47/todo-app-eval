import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css',
})
export class TodoInputComponent {
  title: string = '';
  description: string = '';

  handleSubmit() {
    if (this.title && this.description) {
      let data: any = localStorage.getItem('todos') || [];
      let parsedData = JSON.parse(data);
      let todo = {
        id: Math.floor(Math.random()*1000) ,
        title: this.title,
        description: this.description,
        status: false
      }
      parsedData.push(todo);
      localStorage.setItem("todos", JSON.stringify(parsedData));
      console.log(todo)
    } else {
      alert('Enter the details !!');
    }
  }
}
