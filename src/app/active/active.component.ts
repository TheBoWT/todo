import { Component, OnInit } from '@angular/core';
import { Items } from '../items.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  items:Items[] = [];
  checkUncheckCondition: boolean = false;
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

getItems(){
  this.items = this.itemsService.activeItems;
}
  checkUncheckAll(){
    for (let index = 0; index < this.items.length; index++) {
      this.items[index].isChecked = this.checkUncheckCondition;
  }
}
  isOneChecked(){
    return this.items.some(k=>{
      return k.isChecked == true;
    });
  }

  isAllchecked(){
   this.isOneChecked();
   this.checkUncheckCondition = this.items.every(item=>{
     return item.isChecked == true;
   });
  }

  deleteChecked(){
    if(confirm('Are you sure you wanna do this?')){
      this.items = this.items.filter(item =>{
      return item.isChecked == false;
    });
   }
  }

  onCheckedOff(i:number, item:Items){
    this.items.splice(i, 1);
    this.itemsService.completedItems.push(item);
  }
  onDelete(i:number){
    this.items.splice(i, 1);
  }
  onAdd(){
    this.itemsService.AddItem();
  }
  onEdit(item:Items){
    this.itemsService.UpdateItem(item);
  }
}
