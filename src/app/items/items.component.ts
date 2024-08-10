import { Component } from '@angular/core';
import { CoffeServiceService } from '../coffe-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  itemslists:any = []
    constructor(private itemsdata: CoffeServiceService){
      this.itemsdata.getData().subscribe((data:any)=>{
        this.itemslists = data;
        console.log(data)
      })      
    }
}
