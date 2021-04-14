import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[myFor]"
})
export class MyForLoop {
  constructor(
    private tRef: TemplateRef<any>,
    private viewRef: ViewContainerRef
  ) {}

  @Input("myFor")
  set myForData(data: any) {
    if (!Array.isArray(data)) {
    }
    this.viewRef.clear();
    for (let item of data) {
      this.viewRef.createEmbeddedView(this.tRef, { $implicit: item });
    }
  }
}
