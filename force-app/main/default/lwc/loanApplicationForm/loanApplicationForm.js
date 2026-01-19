import { LightningElement } from 'lwc';

// Parent-child communication -> Child sends data to parent via (CustomEvent)

export default class LoanApplicationForm extends LightningElement {
    customerInfo = {};   // Store data received from  PersonalDetails child
    loanInfo = {};   // Store data received from LoanDetails child

    // Sends data from personalDetails child to parent on save
    handlePersonalDetailSave(event) {
        this.customerInfo = event.detail;
        console.log('Customer Info Data:', this.customerInfo);
    }

    // Sends updates to parent from loanDetails child
    handleLoanDetailSave(event) {
        this.loanInfo = event.detail;
        console.log('Loan Info Updated:', this.loanInfo);
    }

    // Final submission of loanApplicationForm
    submitApplication() {
        // Combine data from both children
        const applicationData = {
            customer: this.customerInfo,
            loan: this.loanInfo
        };
        console.log('This Loan Application:', applicationData, 'has been submitted.');
    }
}
