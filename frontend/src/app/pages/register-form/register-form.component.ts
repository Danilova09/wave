import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
