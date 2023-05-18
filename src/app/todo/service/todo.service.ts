import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from 'src/app/service/logger.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = []

  constructor(private loggerService: LoggerService, private toastr: ToastrService) { }

  addTodo(todo: Todo){
    this.todos.push(todo);
    this.loggerService.log(`Added Todo: ${todo.name}`)
    this.toastr.success('Hello world!', 'Toastr fun!');

  }

  removeTodo(todo: Todo){
    var index = this.todos.indexOf(todo);
    if(index === -1){
      return;
    }

    this.todos.splice(index, 1);
    this.loggerService.log(`Removed Todo: ${todo.name}`)
  }
}
