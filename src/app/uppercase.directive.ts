import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[uppercase]',
})
export class UppercaseDirective {
  constructor(public ref: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: { target: { value: string; }; }) {
    this.ref.nativeElement.value = event.target.value.toUpperCase();
  }
}
