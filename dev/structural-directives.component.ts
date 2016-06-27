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
  `
})

export class StructuralDirectivesComponent {

}
