/**
 * Data object model of todo.
 * 
 * @export
 * @class Todo
 */

export class Todo {
    /**
     * Title of todo.
     * 
     * @private
     * @memberof Todo
     */
    private title = '';

    /**
     * Completed of not.
     * 
     * @private
     * @memberof Todo
     */
    private completed = false;

    /**
     * Is in edit mode or not.
     * 
     * @private
     * @memberof Todo
     */
    private editMode = false;

    /**
     * Creates an instance of Todo.
     * 
     * @param {string} title - title of todo.
     * @memberof Todo
     */
    constructor(title: string) {
        this.title = title || '';
    }

    /**
     * If this todo is done.
     * 
     * @readonly
     * @type {boolean}
     * @memberof Todo
     */
    get done(): boolean {
        return this.completed;
    }

    get editing(): boolean {
        return this.editMode;
    }

    set editable(bl: boolean) {
        this.editMode = bl;
    }

    /**
     * Retrieve title of todo.
     * 
     * @return {string}
     * @memberof Todo
     */
    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    /**
     * Toggle completed state.
     * 
     * @memberof Todo
     */
    toggleCompletion(): void {
        this.completed = !this.completed;
    }

    setCompleted(completed: boolean): void {
        this.completed = completed;
    }
}
