import { Component } from 'angular2/core';

@Component({
  selector: 'my-structural-directives',
  template: `
    <section class="directive">
      <h2>*ngIf</h2>
      <div>
        Enter a number higher than 10
        <br>
        <input type="text" #number (keyup)="0">
      </div>
      <div *ngIf="number.value > 10">
        <h5>A heading</h5>
        Number is greater than 10
      </div>
    </section>
    <section class="directive">
      <h2>*ngFor</h2>
      <div>
        <ul>
          <li *ngFor="#item of list, #i = index">{{ item }} {{ i }}</li>
        </ul>
      </div>
    </section>
    <section class="directive">
      <h2>[ngSwitch]</h2>
      <div>
        Enter red, blue or green
        <br><br>
        <input type="text" #color (keyup)="0">
      </div>
      <br>
      <div [ngSwitch]="color.value">
        <template [ngSwitchWhen]="'red'"><span style="color: tomato;">Color is Red</span></template>
        <template [ngSwitchWhen]="'blue'"><span style="color: darkblue;">Color is Blue</span></template>
        <template [ngSwitchWhen]="'green'"><span style="color: forestgreen;">Color is Green</span></template>
        <template ngSwitchDefault><span style="color: lightgoldenrodyellow;">Color is Unrecognized</span></template>
      </div>
    </section>
  `
})

export class StructuralDirectivesComponent {
  list = [ "apple", "milk", "bread" ];
}
