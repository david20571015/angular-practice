export class Message {
    /**
     * Name of the message leaver.
     * 
     * @type {string}
     * @memberof Message
     */
    name: string;

    /**
     * Content of the message.
     * 
     * @type {string}
     * @memberof Message
     */
    content: string;

    /**
     * Date of message left.
     * 
     * @type {Date}
     * @memberof Message
     */
    date: Date;

    /**
     * Create an instance of Message.
     * 
     * @param {string} name
     * @param {string} content
     * @memberof Message
     */
    constructor(name: string, content: string) {
        this.name = name;
        this.content = content;
        this.date = new Date();
    }
}
