/*
======================================
; Title: interest.component.ts
; Author: Janis Gonzalez
; Date: July 16, 2023
; Description: interest component file for capstone
; Sources Used:
; WEB-425 Capstone Instructions
;=====================================
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  // brings in the interest variable so that it can be displayed in this component
  @Input() interest: number;

  constructor() { }

  ngOnInit(): void {
  }

}
