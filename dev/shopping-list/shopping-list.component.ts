import { Component } from 'angular2/core';
import {ShoppingListNewItemComponent} from "./shopping-list-new-item.component";

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
          <li *ngFor="#item of listItems">{{ item.name }} | ({{ item.amount }})</li>
        </ul>
      </div>
    </section>
    <section>
      Edit Items
    </section>
  `,
  directives: [ShoppingListNewItemComponent]
})

export class SoppingListComponent {
  listItems = new Array<{ name: string, amount: number }>();

  onItemAdded(item: { name: string, amount: number }) {
    this.listItems.push({ name: item.name, amount: item.amount });
  }
}
