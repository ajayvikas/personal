import {noView, bindable, inject, customElement, containerless, ViewCompiler, ViewResources, 
    Container, ViewSlot, ViewFactory, inlineView} from 'aurelia-framework';

//@noView()
//@containerless()
@inlineView("<template><content></content></template>")
@customElement("grid-column")
@inject(Element, ViewCompiler, ViewResources, Container, ViewSlot)
export class GridColumn {
    @bindable public title: string;
    @bindable public field: string;
    @bindable public cellstyle: string;
    public viewFactory : ViewFactory;
    public bindingContext: any;
    constructor(private element: Element,
                private viewComplier: ViewCompiler, 
                private viewResources: ViewResources, 
                private container: Container, 
                private viewSlot: ViewSlot) {
    }
    bind(bindingContext: any) {
        this.bindingContext = bindingContext;
        var parentElement = document.createElement("div");
        var elements : HTMLElement[] = [].slice.call((<any>this.element).children);
        if (elements.length == 0) {
            var template = "<template><td style.bind='column.cellstyle'>${item." + this.field + "}</td></template>";
            this.viewFactory = this.viewComplier.compile(template, this.viewResources);
        }
        else {
            elements.forEach(e => parentElement.appendChild(e));
            var innerhtml = parentElement.innerHTML;
            var template = `<template><td style.bind='column.cellstyle'>${innerhtml}</td></template>`;
            this.viewFactory = this.viewComplier.compile(template, this.viewResources);
        }
    }
}

