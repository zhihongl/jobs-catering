import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'anms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
  }

  update(form: Form) {
  }

  save() {
  }

  submit() {

  }

  reset() {
  }
}
