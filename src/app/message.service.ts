/*
 * @Author: r1ngo
 * @Date: 2022-03-23 14:52:29
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-23 14:52:41
 * @Description: ez pz lemon squezzy
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
