import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  profileDetail = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['']
  })
  fName = new FormControl('');
  lName = new FormControl('');
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Button Clicked");
  }

}
