import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  constructor(private fb: FormBuilder){}
  public reactiveForm:any = FormGroup;
  submit=false;
  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      name : ['',Validators.minLength(10)],
      email : [''],
      number : [''],
      subject : [''],
      message : [''],
    })
  }

  onSubmit(){
    this.submit=true;
    console.log(this.reactiveForm.value);
    
  }
}
