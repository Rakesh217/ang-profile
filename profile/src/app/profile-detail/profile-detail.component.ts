import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import { ServiceappService} from '../serviceapp.service';
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  
  public details = [];
  constructor(private _profileDetails: ServiceappService) { }
  ngOnInit() {
    this._profileDetails.getDetails().subscribe(data => this.details = data);
  }

}
