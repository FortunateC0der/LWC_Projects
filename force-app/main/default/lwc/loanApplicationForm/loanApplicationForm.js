import { LightningElement } from "lwc";

// Parent handles step-state and receives child data via CustomEvent
export default class LoanApplicationForm extends LightningElement {
  // Step state
  isStep1 = true;
  isStep2 = false;
  isSuccessful = false;

  // Data from children
  customerInfo = {};
  loanInfo = {};

  // Receives and stores personal details from child
  handlePersonalDetailSave(event) {
    this.customerInfo = event.detail;
    console.log("Customer Info Data:", this.customerInfo);
  }

  // Receives and stores loan details from child
  handleLoanDetailSave(event) {
    this.loanInfo = event.detail;
    console.log("Loan Info Updated:", this.loanInfo);
  }

  // Move from Step 1 -> Step 2
  handleNextStep() {
    this.isStep1 = false;
    this.isStep2 = true;
  }

  // Move back to Step 1
  handleBackStep() {
    this.isStep1 = true;
    this.isStep2 = false;
  }

  // Submit application and show confirmation
  submitApplication() {
    const applicationData = {
      customer: this.customerInfo,
      loan: this.loanInfo
    };
    console.log("This Loan Application has been submitted:", applicationData);
    this.isSuccessful = true;
    this.isStep2 = false;
  }

  // Reset form to initial state to submit another application
  handleResetForm() {
    this.customerInfo = {};
    this.loanInfo = {};
    this.isSuccessful = false;
    this.isStep1 = true;
    this.isStep2 = false;
  }
}
