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
    for (let i = 0; i < data.length; i++) {
      this.viewRef.createEmbeddedView(this.tRef, {
        $implicit: data[i],
        index: i
      });
    }
  }
}
