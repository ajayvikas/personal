import {customElement} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@customElement('person')
export class Person {
    person = { label: '' };
  constructor(private controller: DialogController){
  }
  activate(person){
    this.person = person;
  }
}