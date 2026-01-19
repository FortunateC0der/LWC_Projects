import { LightningElement } from 'lwc';

export default class LoanDetails extends LightningElement {
    // Store loan input values
    amount = 0;
    term = 12;
    loanType = '';

    // Options shown in the Loan Type dropdown
    loanOptions = [
        { label: 'Home Loan', value: 'home' },
        { label: 'Car Loan', value: 'car' },
        { label: 'Personal Loan', value: 'personal' }
    ];

    // Called when Amount changes
    handleAmountChange(event) {
        this.amount = event.target.value;
        this.sendLoanData();
    }

    // Called when Term changes
    handleTermChange(event) {
        this.term = event.target.value;
        this.sendLoanData();
    }

    // Called when Loan Type changes
    handleLoanTypeChange(event) {
        this.loanType = event.target.value;
        this.sendLoanData();
    }

    // Sends loan details to the parent component
    sendLoanData() {
        this.dispatchEvent(
            new CustomEvent('loandetailsave', {
                detail: {
                    amount: this.amount,
                    term: this.term,
                    loanType: this.loanType
                }
            })
        );
    }
}
