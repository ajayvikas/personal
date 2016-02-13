import {bindable, inject, customElement, Container} from 'aurelia-framework';

@customElement('label-input')
@inject(Element, Container)
export class LabelInput {
    @bindable label: string;
    @bindable value: string | number;
    constructor(private element: Element, private container: Container) {
    }
    bind(bindingContext: any, overrideContext: any) {
        debugger;
    }
}
