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
      Validators.required,Validators.pattern( /^[A-Z]+[a-zA-z]{2,15}$/)
    ]),
    lname: new FormControl('', [
      Validators.required,Validators.pattern( /^[A-Z]+[a-zA-z]{2,15}$/)
    ]),
    email: new FormControl('', [
      Validators.required,Validators.email
    ]),
    pass: new FormControl('', [
      Validators.required,Validators.pattern(/^[a-zA-z0-9]{8,}$/)
    ]),
    ph: new FormControl('',[
      Validators.required, Validators.pattern(/^[0-9]{11}$/)
    ]),
    city: new FormControl('', Validators.required),
    cbo: new FormControl('', Validators.required)
  });
}
  
  onSubmit() {
    alert("Form Submitted Successfuly!");
    this.Form.reset();
  }
}