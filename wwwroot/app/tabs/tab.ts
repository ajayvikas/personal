import {customElement, children, bindable, inject} from 'aurelia-framework';
import {Tabs} from "./tabs";
@inject(Element, Tabs)
export class Tab {
    @bindable heading: string;
    constructor(private element: Element, private tabs: Tabs) {
    }
    bind() {
        console.log(this.heading);
    }
}