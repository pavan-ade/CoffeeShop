import { Component } from '@angular/core';
import { CoffeServiceService } from '../coffe-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  itemslists:any = []
  constructor(private itemsdata: CoffeServiceService){
    this.itemsdata.getData().subscribe((data:any)=>{
      this.itemslists = data;
      console.log(data)
    })      
  }
}
