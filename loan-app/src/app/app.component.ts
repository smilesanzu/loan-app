/*
======================================
; Title: app.component.ts
; Author: Janis Gonzalez
; Date: July 16, 2023
; Description: app component for loan app
; Sources Used:
; WEB-425 Capstone Instructions
;=====================================
*/

// imports
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title string
    title: string;
    // assignment variable to the loan app assignment
    constructor(){
      this.title = 'Welcome to Loan App!';
      }
}
