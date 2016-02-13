import {customElement, children, bindable} from 'aurelia-framework';
import {Tab} from './tab';

@customElement("tabs")
export class Tabs {
    @bindable alltabs: any[];
    @children("tab") items: Tab[] = [];
    constructor() {
    
    }
    bind() {
        debugger;
    }
    public addTab(tab: Tab) {
        //this.items.push(tab);
    }
    public removeTab(tab: Tab) {
        //var index = this.items.indexOf(tab);
        //this.items.slice(index, 1);
    }
}