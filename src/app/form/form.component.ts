import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Form: FormGroup
  cities = ['Abbotabad','Bahawalpur','Chiniot','Dera Ghazi Khan',
  'Faisalabad','Haiderabad', 'Islamabad','Karachi','Lahore','Multan'];
  submitted = false;
constructor() { }
ngOnInit(){
  this.Form = new FormGroup({
    fname: new FormControl('', [
      Validators.required,Validators.pattern( /^[A-Z]+[a-zA-z]{1,}$/), Validators.minLength(3)
    ]),
    lname: new FormControl('', [
      Validators.required,Validators.pattern( /^[A-Z]+[a-zA-z]{1,}$/), Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,Validators.email
    ]),
    pass: new FormControl('', [
      Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{3,}$/), Validators.minLength(8)
    ]),
    ph: new FormControl('',[
      Validators.required, Validators.pattern(/^[0-9]{1,}$/), Validators.maxLength(11), Validators.minLength(11)
    ]),
    city: new FormControl('', Validators.required),
    cbo: new FormControl('', Validators.required)
  });
}
get fn(){
  return this.Form.get('fname');
}
  onSubmit() {
    alert("Form Submitted Successfuly!");
    this.Form.reset();
  }
}