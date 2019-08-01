import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('form', {static: false}) form: NgForm;

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultCountry = 'ua';
  defaultAnswer = 'no'
  formData = {};
  isSubmitted = false;

  randEmail() {
      const email = 'julianbgs@gmail.com';
      this.form.form.patchValue({
          user: {email}
      });
  }

  submitedForm() {
    this.isSubmitted = true;
    this.formData =  this.form.value;
    this.form.reset();
  }
}
