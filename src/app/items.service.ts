import { Injectable } from '@angular/core';
import { AddComponent } from './add/add.component';
import { Items } from './items.model';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  activeItems:Items[] = [
    {name:'Apple', amount: 5, note:'buy it today',  isChecked:false},
    {name:'Orange', amount: 6, note:'some notes',  isChecked:false},
    {name:'Banana', amount: 10, note:'some notes', isChecked:false},
    {name:'Pineapple', amount: 1, note:'buy it today', isChecked:false}
  ];
  completedItems:Items[] = [
    {name:'Grapes', amount: 5, note:'buy it today',  isChecked:false},
    {name:'Pine', amount: 1, note:'buy it today',  isChecked:false}
  ];


constructor(private dialog:MatDialog) { }

  AddItem(){
    let dialogRef = this.dialog.open(AddComponent, {data: {formAction: 'Add Item'}, width: '500px', height: '400px'});
    dialogRef.afterClosed().subscribe(data=>{
      if(data != null){
        let newItem = new Items(data.name, data.amount, data.note);
        this.activeItems.push(newItem);
      }
    });
  }

  UpdateItem(item:Items){
    let dialogRef = this.dialog.open(AddComponent, {data:{formAction: 'Update Item', formData: item}, width: '500px', height: '400px'});
    dialogRef.afterClosed().subscribe(data=>{
      if(data != null){
        item.name = data.name,
        item.amount = data.amount,
        item.note = item.note
      }

    });
  }
}
