import { LightningElement } from 'lwc';

export default class ParentContainer extends LightningElement {
    receivedName;
    receivedEmail;
    hasData = false;

    handleUserDetails(event) {
        this.receivedName = event.detail.name;
        this.receivedEmail = event.detail.email;
        this.hasData = true;
    }
}