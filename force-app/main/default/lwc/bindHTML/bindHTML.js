// Import the base class needed to create a Lightning Web Component
import { LightningElement } from 'lwc';

// Export the component so Salesforce can use it
export default class BindHTML extends LightningElement {

    // Variables to store user input from the UI
    firstName = '';
    lastName = '';

    // This method runs whenever an input field changes
    handleChange(event) {

        // Get "name" attribute of input that triggered  event to identify which field was updated
        const field = event.target.name;

        // If the changed input is the first name field
        if (field === 'firstName') {
            // Update the firstName property with the new value
            this.firstName = event.target.value;

        // If the changed input is the last name field
        } else if (field === 'lastName') {
            // Update the lastName property with the new value
            this.lastName = event.target.value;
        }
    }

    // Getter method (acts like a read-only variable)
    // It is automatically recalculated when firstName or lastName changes
    get upperCaseName() {
        // Combine first and last name, then convert everything to uppercase
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}
