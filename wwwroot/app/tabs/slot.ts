import {customElement, children, bindable, ViewCompiler, 
    ViewResources, Container, ViewSlot, noView, containerless} from 'aurelia-framework';

@customElement("slot")
@containerless()
@noView()
export class Slot {
    constructor(private viewComplier: ViewCompiler, 
                private viewResources: ViewResources, 
                private container: Container, 
                private viewSlot: ViewSlot) {
    }
    private title: string = "click me!!!"
    attached() {
        var viewFactory = this.viewComplier.compile("<template><button click.trigger='clickMe()'>${title}</button></template>", this.viewResources);
        var view = viewFactory.create(this.container);
        view.bind(this);
        this.viewSlot.add(view);
        this.viewSlot.attached();
    }
    clickMe() {
        alert("clicked");
    }
}