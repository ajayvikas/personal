import {customElement, bindable, inject, processAttributes, processContent,
    ViewCompiler, ViewResources, BehaviorInstruction, Container, TargetInstruction,
    BindingEngine, children} from 'aurelia-framework';
@customElement("table-grid")
export class TableGrid {
    @bindable datasource: any[];
    @bindable columns: any[];
}