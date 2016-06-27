import { Component } from 'angular2/core';
import {ShoppingListNewItemComponent} from "./shopping-list-new-item.component";
import {ListItem} from "../list-item";
import {ShoppingListItemComponent} from "./shopping-list-item.component";

@Component({
  selector: 'shopping-list',
  template: `
    <section>
      <sopping-list-new-item (itemAdded)="onItemAdded($event)"></sopping-list-new-item>
    </section>
    <section>
      <h3>MyList</h3>
      <div class="list">
        <ul>
          <li *ngFor="#item of listItems" (click)="onSelect(item)">
            {{ item.name }} ({{ item.amount }})
          </li>
        </ul>
      </div>
    </section>
    <section *ngIf="selectedItem != null">
      <shopping-list-item [item]="selectedItem"></shopping-list-item>
    </section>
  `,
  directives: [ShoppingListNewItemComponent, ShoppingListItemComponent]
})

export class SoppingListComponent {
  listItems = new Array<ListItem>();
  selectedItem: ListItem;

  onItemAdded(item: ListItem) {
    this.listItems.push({ name: item.name, amount: item.amount });
  }

  onSelect(item: ListItem) {
    this.selectedItem = item;
  }
}
