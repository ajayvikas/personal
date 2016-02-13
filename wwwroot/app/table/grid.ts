import {bindable, inject, BindingEngine, customElement, processContent, 
    TargetInstruction, BehaviorInstruction } from 'aurelia-framework';
import {GridColumn} from './grid-column';
import {ViewCompiler, ViewSlot, ViewResources, Container} from 'aurelia-framework';

@inject(Element, ViewCompiler, ViewResources, Container, TargetInstruction, BindingEngine)
@processContent(processTableContent)
export class Grid {
    rows: string[] = ["John", "Doe"];
    tableDefinition: TableDefinition;
    instructions: BehaviorInstruction;
    viewSlot: ViewSlot;
    rowTemplate: DocumentFragment;
    constructor(private element: Element, private viewCompiler: ViewCompiler, 
            private viewResources: ViewResources, private container: Container, 
            private targetInstruction: TargetInstruction, private bindingEngine: BindingEngine ) {
        this.instructions = <BehaviorInstruction>targetInstruction["behaviorInstructions"][0];  //HACK: typscript definition problem
        this.tableDefinition = <TableDefinition>this.instructions["tableDefinition"];
        debugger;
    }
    bind(bindingContext: any, overrideContext: any) {
        this["$parent"] = bindingContext;
        var tbody = this.element.querySelector("table>tbody");
        this.viewSlot = new ViewSlot(tbody, true, null);
        var row = tbody.querySelector("tr");
        this.addRowAttributes(row);
        this.rowTemplate = document.createDocumentFragment();
        this.rowTemplate.appendChild(row);
        this.buildTemplates();
    }
    addRowAttributes(row: Element) {
        row.setAttribute("repeat.for", "$item of data");
        for(var prop in this.tableDefinition.rowAttrs) {
            if (this.tableDefinition.rowAttrs.hasOwnProperty(prop)) {
                row.setAttribute(prop, this.tableDefinition.rowAttrs[prop]);
            }
        }
    }
    buildTemplates() {
        var rowTemplate = this.rowTemplate.cloneNode(true);
        var row = rowTemplate.querySelector("tr");
    }
}
function processTableContent (viewCompiler : ViewCompiler, viewResources: ViewResources, 
    element: Element, instruction: BehaviorInstruction) {
    var columns: GridColumn[] = [];
    var rowElement: Element = element.querySelector("grid-row");
    var columnElements: Element[] = Array.prototype.slice.call(rowElement.querySelectorAll("grid-column"));
    columnElements.forEach(ce => {
        var column = new GridColumn(ce.innerHTML);
        var columnAttrs: Attr[] = [].slice.call(ce.attributes);
        columnAttrs.forEach(ca => column.attributes[ca.name] = ca.value);
        columns.push(column);
    });
    var rowAttrs: {[key: string]: any} = {};
    [].slice.call(rowElement.attributes).forEach(ra => rowAttrs[ra.name] = ra.value);
    
    var result: TableDefinition = { columns: columns, rowAttrs: rowAttrs };
    Object.defineProperty(instruction, "tableDefinition", {value: result});
    return true;    //true => remove the contents
}
// function processTemplate(element: Element) : TableDefinition  {
//     var columns: GridColumn[] = [];
//     var rowElement: Element = element.querySelector("grid-row");
//     var columnElements: Element[] = Array.prototype.slice.call(rowElement.querySelectorAll("grid-column"));
//     columnElements.forEach(ce => {
//         var column = new GridColumn(ce.innerHTML);
//         var columnAttrs: Attr[] = [].slice.call(ce.attributes);
//         columnAttrs.forEach(ca => column.attributes[ca.name] = ca.value);
//         columns.push(column);
//     });
//     var rowAttrs: {[key: string]: any} = {};
//     [].slice.call(rowElement.attributes).forEach(ra => rowAttrs[ra.name] = ra.value);
//     
//     return { columns: columns, rowAttrs: rowAttrs };
// }
class TableDefinition {
    public columns: GridColumn[];
    public rowAttrs: {[key: string]: any};
}