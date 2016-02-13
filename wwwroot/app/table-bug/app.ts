import {customElement} from 'aurelia-framework';
@customElement("app")
export class App {
    public customers: any[] = [];
    public columns: any[] = [
                    {title: "First Name", field: "FirstName"}, 
                    {title: "Last Name", field: "LastName"}
                    ];
    onClickAdd() {
        var newCustomers = this.getCustomers();
        this.customers = newCustomers;
    }
    getCustomers() {
        return [{ "Id": 1, "Gender": "Male", "FirstName": "Willie", "LastName": "Pierce", "Email": "wpierce0@webs.com", "IPAddress": "155.41.46.102" },
            { "Id": 2, "Gender": "Male", "FirstName": "Dennis", "LastName": "Sims", "Email": "dsims1@ovh.net", "IPAddress": "158.54.212.182" },
            { "Id": 3, "Gender": "Male", "FirstName": "George", "LastName": "Cox", "Email": "gcox2@xinhuanet.com", "IPAddress": "144.71.102.82" }];
    }
}