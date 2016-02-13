import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        
        .plugin("aurelia-computed", {enableLogging: true })
        .plugin("aurelia-dialog");
    
    aurelia.start().then(() => aurelia.setRoot("app/table2/app"));
    //aurelia.start().then(() => aurelia.setRoot("app/test/welcome"));
    //aurelia.start().then(() => aurelia.setRoot("app/table/table-harness"));
}