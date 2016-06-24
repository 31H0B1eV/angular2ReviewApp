import {Component} from 'angular2/core';
import {AttributeDirectivesComponent} from "./attribute-directives.component";
import {StructuralDirectivesComponent} from "./structural-directives.component";

@Component({
    selector: 'my-app',
    template: `
      <my-attribute-directives></my-attribute-directives>
      <br>
      <h1>Structural Directives</h1>
      <my-structural-directives></my-structural-directives>
    `,
    directives: [AttributeDirectivesComponent, StructuralDirectivesComponent]
})
export class AppComponent {

}