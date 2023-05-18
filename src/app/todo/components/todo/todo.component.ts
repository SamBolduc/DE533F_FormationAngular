import { Component } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  name: string = '';
  content: string = '';

  constructor(private todoService: TodoService){}

  addTodo(){
    if(this.name && this.content){
      this.todoService.addTodo(new Todo(this.name, this.content));
      this.name = '';
      this.content = '';
    }
  }

  removeTodo(todo: Todo){
    this.todoService.removeTodo(todo);
  }

  isFormCompleted(){
    return !this.name.trim() || !this.content.trim();
  }

  get todos(){
    return this.todoService.todos;
  }
}
