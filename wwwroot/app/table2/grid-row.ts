import {noView, bindable, inject, customElement, containerless, ViewCompiler, ViewResources, 
    Container, ViewSlot, ViewFactory, inlineView} from 'aurelia-framework';
import {GridColumn} from "./grid-column";
@customElement("row")
export class GridRow {
    @bindable columns: GridColumn[];
    @bindable item: any;
}