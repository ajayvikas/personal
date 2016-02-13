import {customElement, children, bindable, ViewCompiler, 
    ViewResources, Container, ViewSlot} from 'aurelia-framework';

@customElement("app")
export class App {
    private tabs: any[] = ["Heading 1", "Heading 2", "Heading 3"];
}