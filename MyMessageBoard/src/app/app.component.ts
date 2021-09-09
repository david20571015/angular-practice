import { Component } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = '';
  content = '';
  messages: Message[] = [];

  fincaddMessage(): void {
    if (!this.name.trim() || !this.content.trim()) {
      return;
    }

    const MESSAGE = new Message(this.name, this.content);
    this.messages.push(MESSAGE);
    this.content = ''
  }
}
