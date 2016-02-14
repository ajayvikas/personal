import {customElement, children, bindable, ViewCompiler, ViewFactory,
    ViewResources, Container, ViewSlot, noView, containerless} from 'aurelia-framework';
import {GridColumn} from "./grid-column";
@customElement("cell")
@containerless()
@noView()
export class CellTransclude {
    constructor(private viewComplier: ViewCompiler, 
                private viewResources: ViewResources, 
                private container: Container, 
                private viewSlot: ViewSlot) {
    }
    @bindable private item: any = {};
    @bindable column: GridColumn;
    events: any;
    attached() {
        this.events = this.column.bindingContext;
        var view = this.column.viewFactory.create(this.container);
        view.bind(this);
        this.viewSlot.add(view);
        this.viewSlot.attached();
    }
}