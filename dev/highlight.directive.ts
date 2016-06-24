import {Directive, ElementRef, OnInit, Renderer} from 'angular2/core';

@Directive({
  selector: '[myHighlight]',
  inputs: ['highlightColor:myHighlight'],
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class HighlightDirective {
  private _defaultColor: 'green';
  highlightColor: string;

  constructor(private _elRef: ElementRef, private _renderer: Renderer ) {}

  onMouseEnter() {
    this.highlight(this.highlightColor || this._defaultColor);
  }

  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this._elRef.nativeElement.style.backgroundColor = color;
  }
}
