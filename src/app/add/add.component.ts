import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formAction: string;
  public formData = new FormGroup({
    name: new FormControl('', Validators.required),
    amount: new FormControl(''),
    note: new FormControl('')
  });

  constructor(
    private dialogRef:MatDialogRef<AddComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.formAction = this.data.formAction;
    if(this.data.formAction == 'Update Item')
      this.formData.patchValue(this.data.formData);

  }

  onClick(){
    this.dialogRef.close(this.formData.value);
  }

}
