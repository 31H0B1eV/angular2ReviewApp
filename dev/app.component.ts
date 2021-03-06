import {Component} from 'angular2/core';
import {SoppingListComponent} from "./shopping-list/shopping-list.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
          <div class="brand">Shopping List</div>
        </header>
        <div class="main">
          <shopping-list></shopping-list>  
        </div>
    `,
    directives: [SoppingListComponent]
})
export class AppComponent {

}