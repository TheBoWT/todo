import { Component, OnInit } from '@angular/core';
import { Items } from '../items.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  items:Items[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
   this.getItems();
}


getItems(){
  this.items = this.itemsService.completedItems;
}

onAdd(i:number, item:Items){
  this.items.splice(i, 1);
  this.itemsService.activeItems.push(item);
}
onDelete(i:number){
  this.items.splice(i, 1);
}
   onEdit(item:Items){
    this.itemsService.UpdateItem(item);
  }
}
