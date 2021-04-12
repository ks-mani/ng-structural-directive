import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[myFor]"
})
export class MyForLoop {
  constructor(
    private tRef: TemplateRef<any>,
    private viewRef: ViewContainerRef
  ) {}
}
