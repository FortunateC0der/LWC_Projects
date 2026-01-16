import { LightningElement } from 'lwc';

export default class ChildForm extends LightningElement {
    name = '';
    email = '';

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleSubmit() {
        // Create payload
        const userData = {
            name: this.name,
            email: this.email
        };

        // Create and dispatch custom event
        const event = new CustomEvent('userdetails', {
            detail: userData
        });

        this.dispatchEvent(event);
    }
}