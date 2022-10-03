import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-search-by-code',
  templateUrl: './page-search-by-code.component.html',
  styleUrls: ['./page-search-by-code.component.css']
})
export class PageSearchByCodeComponent implements OnInit {
  rightCode: string = '123456';
  inputCode: string = '';
  displayWrongCodeModal: boolean = false;
  buttonDisabled: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  checkEnableButton() {
    this.buttonDisabled = this.inputCode.length !== 6;
  }

  validateCode() {
    if (this.inputCode === this.rightCode) {
      console.log('You are right!');
      this.displayWrongCodeModal = false;
    } else {
      this.displayWrongCodeModal = true;
      console.log('You are wrong!');
    }
  }
}
