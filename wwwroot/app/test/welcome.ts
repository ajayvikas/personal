import {declarePropertyDependencies, computedFrom, inject, Container } from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';
import {autoinject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {Person} from "./person";

@inject(Element, Container, DialogService)
export class Welcome {
    data: any[];
    columns: string[];
    constructor(private element: Element, container: Container, private dialogService: DialogService) {
        this.data = [{label: "Ajay", value: "Goyal"}, {label: "Anurag", value: "Jain"}];
        this.columns = ["label", "value"]
    }
    bind(bindingContext: any, overrideContext: any) {
        debugger;
    }
    onClick() {
        //var person = { firstName: 'Wade', middleName: 'Owen', lastName: 'Watts' };
        this.dialogService.open({viewModel: Person, model: this.data[0]}).then(response => {
            if (!response.wasCacelled) {
                alert("Good");
            }
            else {
                alert("Bad");
            }
        })
        //this.data.push({label: "Shipra", value: "Agrawal"});
    }
}