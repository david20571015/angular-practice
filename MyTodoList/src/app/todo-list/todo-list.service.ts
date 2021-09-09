import { Injectable } from '@angular/core';

import { Todo } from './todo.model'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private list: Todo[] = [];

  constructor() { }

  /**
   * Add todo.
   * 
   * @param {string} title - title of the todo.
   * @memberof TodoListService
   */
  add(title: string): void {
    if (title || title.trim()) {
      this.list.push(new Todo(title));
    }
  }

  /**
   * Retrieve todo list.
   * 
   * @return {string[]}
   * @memberof TodoListService
   */
  getList(): Todo[] {
    return this.list;
  }

  /**
   * Remove todo.
   * 
   * @param {number} index - index of todo.
   * @memberof TodoListService
   */
  remove(index: number): void {
    this.list.splice(index, 1);
  }

  /** Retrieve completed / uncompleted list.
   * 
   * @param {boolean} completed
   * @return {Todo[]}
   * @memberof TodoListService
   */
  getWithCompleted(completed: boolean): Todo[] {
    return this.list.filter(todo => todo.done === completed);
  }

  removeCompleted(): void {
    this.list = this.getWithCompleted(false);
  }
}
