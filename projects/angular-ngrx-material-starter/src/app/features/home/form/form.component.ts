import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../../../core/data/data.service';

import {
  NotificationService
} from '../../../core/core.module';
import { Form } from '../form.model';

@Component({
  selector: 'anms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    displayName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ]
    ],
    department: [''],
    team: [''],
  });


  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
  }

  update(form: Form) {
  }

  save(dataObj) {
    this.data.submitUserAccount(dataObj).subscribe(data => {
      console.warn('submit form', data);
    });
  }

  submit() {
    if (this.form.valid) {
      this.data.submitUserAccount(this.form.value).subscribe(data => {
        console.warn('submit form', data);
        this.notificationService.info('New user has been created.');
      });

    }
  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
  }
}
