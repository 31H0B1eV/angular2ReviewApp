import {Directive, ElementRef} from 'angular2/core';

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

  constructor(private _elRef: ElementRef) {}

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
