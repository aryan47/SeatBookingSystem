/*
 * Created on Sun Dec 01 2019
 * Created by - Ritesh Kant
 *
 */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from './Services/user-service.service';
import { NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public userForm: FormGroup;
  public buttonStatus: String;
  constructor(public dialogRef: MatDialogRef<UsersComponent>, private userService: UserServiceService) { }

  ngOnInit() {
    this.buttonStatus = 'Proceed';
    this.userForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  /** Used to submit form and send email */
  public onSubmit() {
    if (this.userForm.valid) {
      this.buttonStatus = "Please Wait...."
      console.log('submitted', this.userForm);
      this.userService.sendConfirmationMail(this.userForm.value.email).subscribe(
        () => {
          this.dialogRef.close('success');
        },
        (err) => {
          this.dialogRef.close('fail');
        }
      );
    }

  }
}
