/*
 * @Author: r1ngo
 * @Date: 2022-03-23 14:51:52
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-23 14:55:33
 * @Description: ez pz lemon squezzy
 */
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
