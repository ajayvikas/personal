import {bindable, inject, customElement, processContent} from 'aurelia-framework';

@processContent(processContent2)
@customElement('grid')
@inject(Element)
export class Table {
    @bindable data: any[];
    @bindable columns: string[];
    label: string = "Hello";
    value: string | number = "Aurelia";
    constructor(private element: Element) {
    }
    bind(bindingContext: any, overrideContext: any) {
        debugger;
    }
    
}
function processContent2() {
    return false;
}