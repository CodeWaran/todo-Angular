import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TodoListComponent } from './app/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent, FormsModule],
  template: `
    <div class="container">
      <h1>Angular Todo App</h1>
      <app-todo-list></app-todo-list>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    h1 {
      color: #333;
      text-align: center;
    }
  `]
})
export class App {
}

bootstrapApplication(App);