import { Component } from 'angular2/core';

@Component({
  selector: 'shopping-list-item',
  template: `
    <div class="input">
      <label for="item-name">Name</label>
      <input type="text" id="item-name" [(ngModel)]="item.name">
    </div>
    <div class="input">      
      <label for="item-amt">Amount</label>
      <input type="text" id="item-amt" [(ngModel)]="item.amount">
    </div>
    <button class="red" (click)="onDelete()">Delete Item</button>
  `,
  inputs: ['item']
})

export class ShoppingListItemComponent {
  item = { name: '', amount: 0 };

  onDelete() {

  }
}
