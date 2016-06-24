import {Directive, ElementRef, OnInit, Renderer} from 'angular2/core';

@Directive({
  selector: '[myHighlight]'
})

export class HighlightDirective implements OnInit {
  private _defaultColor = 'green';

  constructor(private _elRef: ElementRef, private _renderer: Renderer ) {}

  ngOnInit(): any {
    this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
    // this._renderer.setElementStyle(this._elRef, 'background-color', this._defaultColor);
  }

}
