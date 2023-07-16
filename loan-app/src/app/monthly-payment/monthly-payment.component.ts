/*
======================================
; Title: monthly-payment.component.ts
; Author: Janis Gonzalez
; Date: July 16, 2023
; Description: monthly payment component file for capstone
; Sources Used:
; WEB-425 Capstone Instructions
;=====================================
*/

// imports
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.css']
})
export class MonthlyPaymentComponent implements OnInit {
  // monthlyPayment variable displayed in component
  @Input() monthlyPayment: number;

  constructor() { }

  ngOnInit(): void {
  }

}
