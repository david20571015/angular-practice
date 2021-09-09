import { Component, OnInit } from '@angular/core';

import { TodoListService } from './todo-list.service';

import { Todo } from './todo.model';
import { TodoStatusType } from './todo-status-type'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoStatusType = TodoStatusType;
  private status = TodoStatusType.ALL;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  /**
   * Add todo.
   *
   * @param {HTMLInputElement} inputRef - Instance of the input element.
   * @memberof TodoListComponent
   */
  addTodo(inputRef: EventTarget | null): void {
    if (!inputRef) {
      return;
    }

    const TODO = (inputRef as HTMLInputElement).value.trim();
    if (TODO) {
      this.todoListService.add(TODO);
      (inputRef as HTMLInputElement).value = '';
    }
  }

  /**
   * Retrieve todo list.
   *
   * @returns string[]
   * @memberof TodoListComponent
   */
  getList(): Todo[] {
    let list: Todo[] = [];

    switch (this.status) {
      case TodoStatusType.ACTIVE:
        list = this.getRemainingList();
        break;
      case TodoStatusType.COMPLETED:
        list = this.getCompletedList();
        break;
      default:
        list = this.todoListService.getList();
        break
    }

    return list;
  }

  /**
   * Remove todo.
   * 
   * @param {number} index - index of todo.
   * @memberof TodoListComponent
   */
  remove(index: number): void {
    this.todoListService.remove(index);
  }

  edit(todo: Todo): void {
    todo.editable = true;
  }

  cancelEditing(todo: Todo): void {
    todo.editable = false;
  }

  update(todo: Todo, newTitle: string): void {
    if (!todo.editing) {
      return;
    }

    const TITLE = newTitle.trim();
    if (TITLE) {
      todo.setTitle(TITLE);
      todo.editable = false;
    } else {
      const INDEX = this.getList().indexOf(todo);
      if (INDEX != -1) {
        this.remove(INDEX);
      }
    }
  }

  getRemainingList(): Todo[] {
    return this.todoListService.getWithCompleted(false);
  }

  getCompletedList(): Todo[] {
    return this.todoListService.getWithCompleted(true);
  }

  setStatus(status: number): void {
    this.status = status;
  }

  checkStatus(status: number): boolean {
    return this.status === status;
  }

  removeCompleted(): void {
    this.todoListService.removeCompleted();
  }

  getAllList(): Todo[] {
    return this.todoListService.getList();
  }

  allCompleted(): boolean {
    return this.getAllList.length === this.getCompletedList.length;
  }

  setAllTo(completed: boolean): void {
    this.getAllList().forEach((todo) => {
      todo.setCompleted(completed);
    });
  }
}
