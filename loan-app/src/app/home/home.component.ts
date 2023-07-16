/*
======================================
; Title: home.component.ts
; Author: Janis Gonzalez
; Date: July 16, 2023
; Description: home component file for capstone
; Sources Used:
; WEB-425 Capstone Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// export
export class HomeComponent implements OnInit {

// establishes errorMessage variable
errorMessage: string;
// variables for form group
loanDetailsForm: FormGroup;
// sets the loan variables to 0 so it doesn't show null by default on page
monthlyPayment: number = 0;
interest: number = 0;

  constructor(private fb: FormBuilder) {
  }

  // validators in order for the calculate button not being able to be clicked unless the fields are filled out and this section also validates numeric values that are entered or an error message appears; both loanAmount and interestRate also allow for a "." to be added without an error
  ngOnInit(): void {
    this.loanDetailsForm = this.fb.group({
      loanAmount: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      interestRate: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      numOfYears: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
    })
  }

  get form() { return this.loanDetailsForm.controls; }

  // function that calculates loan details
  calculateResults() {
    // pulls form data
    let formDetails = this.loanDetailsForm.value;
    let loanAmount = parseFloat(formDetails.loanAmount);
    let interestRate = parseFloat(formDetails.interestRate);
    let numOfYears = parseFloat(formDetails.numOfYears);

    // variables defined
    let months = (numOfYears * 12);
    let ratePerPeriod = ((interestRate / 100) / 12);

    // calculation using the defined variables and code provided in instructions of assignment
    this.monthlyPayment = (loanAmount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), months))) / (Math.pow((1 + ratePerPeriod), months) - 1);
    this.interest = (this.monthlyPayment * months) - loanAmount;
  }

    // function resets all the entries to blank
    resetEntries() {
      this.monthlyPayment = 0;
      this.interest = 0;
      this.loanDetailsForm.reset();
    }
  }
