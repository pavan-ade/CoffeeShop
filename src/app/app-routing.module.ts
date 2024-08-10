import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'item', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
