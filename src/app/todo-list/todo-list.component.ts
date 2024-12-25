import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="todo-container">
      <div class="add-todo">
        <input
          type="text"
          [(ngModel)]="newTodoText"
          (keyup.enter)="addTodo()"
          placeholder="Add a new todo"
          class="todo-input"
        />
        <button (click)="addTodo()" class="add-button">Add</button>
      </div>

      <ul class="todo-list">
        <li *ngFor="let todo of todos" [class.completed]="todo.completed">
          <input
            type="checkbox"
            [checked]="todo.completed"
            (change)="toggleTodo(todo)"
          />
          <span>{{ todo.text }}</span>
          <button (click)="deleteTodo(todo)" class="delete-button">Delete</button>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .todo-container {
      background: white;
      border-radius: 8px;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .add-todo {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    .todo-input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .add-button {
      padding: 0.5rem 1rem;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .add-button:hover {
      background: #45a049;
    }
    .todo-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .todo-list li {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-bottom: 1px solid #eee;
      gap: 0.5rem;
    }
    .todo-list li.completed span {
      text-decoration: line-through;
      color: #888;
    }
    .todo-list li span {
      flex: 1;
    }
    .delete-button {
      padding: 0.25rem 0.5rem;
      background: #ff4444;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .delete-button:hover {
      background: #cc0000;
    }
  `]
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodoText = '';

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todos.push({
        id: Date.now(),
        text: this.newTodoText.trim(),
        completed: false
      });
      this.newTodoText = '';
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }
}