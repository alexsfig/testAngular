import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string = '';
  error: string = ''
  add(message: string, error: string = '') {
    this.messages = message;
    if(error ==='error'){
      this.error = 'danger'
    }
    else{
      this.error = 'info'
    }
  }


  clear() {
    this.messages = '';
  }
}
