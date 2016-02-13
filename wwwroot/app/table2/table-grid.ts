import {customElement, bindable, inject, processAttributes, processContent,
    ViewCompiler, ViewResources, BehaviorInstruction, Container, TargetInstruction,
    BindingEngine, children} from 'aurelia-framework';
import {GridColumn} from "./grid-column";
//@processContent(processGridContents)
@customElement("table-grid")
@inject(Element, ViewCompiler, ViewResources, Container, TargetInstruction, BindingEngine)
export class TableGrid {
    @bindable datasource: any[];
    @children("grid-column") columns;
    constructor(private element: Element, private viewCompiler: ViewCompiler, 
            private viewResources: ViewResources, private container: Container, 
            private targetInstruction: TargetInstruction, private bindingEngine: BindingEngine ) {
        
    }
}
// function processGridContents(viewCompiler : ViewCompiler, viewResources: ViewResources, 
//     element: Element, instruction: BehaviorInstruction) {
//     
// }