import {noView, bindable, inject, customElement, containerless, ViewCompiler, ViewResources, 
    Container, ViewSlot, ViewFactory, inlineView} from 'aurelia-framework';

@customElement("grid-row")
@containerless
export class GridRow {
    @bindable item: any[];
    @bindable columns: any[];
}