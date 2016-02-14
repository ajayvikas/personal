import {Aurelia} from 'aurelia-framework';
import {TWBootstrapViewStrategyBase, ValidationConfig} from 'aurelia-validation';

export function configure(aurelia: Aurelia): void {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        
        .plugin("aurelia-computed", {enableLogging: true })
        .plugin("aurelia-dialog");
        //var x = new TWBootstrapViewStrategyBase(true, false, 'aurelia-validation-message');
        aurelia.use.plugin('aurelia-validation', 
            (config : ValidationConfig) => {
                let strategy = config.getValue("viewStrategy");
                strategy.appendMessageToInput = true;
                strategy.appendMessageToLabel = false;
            }); 
    aurelia.start().then(() => aurelia.setRoot("app/table2/app"));
    //aurelia.start().then(() => aurelia.setRoot("app/table2/app"));
    //aurelia.start().then(() => aurelia.setRoot("app/test/welcome"));
    //aurelia.start().then(() => aurelia.setRoot("app/table/table-harness"));
}