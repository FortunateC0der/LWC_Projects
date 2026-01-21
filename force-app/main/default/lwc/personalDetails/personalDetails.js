import { LightningElement } from "lwc";

export default class PersonalDetails extends LightningElement {
  // Hold current input values from user
  name = "";
  idNumber = "";
  phone = "";

  // Called when name input changes
  handleNameChange(event) {
    this.name = event.target.value;
    this.sendDataToParent();
  }

  // Called when ID number input changes
  handleIdChange(event) {
    this.idNumber = event.target.value;
    this.sendDataToParent();
  }

  // Called when the phone input changes
  handlePhoneChange(event) {
    this.phone = event.target.value;
    this.sendDataToParent();
  }

  // Sends the current values to the parent component
  sendDataToParent() {
    this.dispatchEvent(
      new CustomEvent("personaldetailsave", {
        detail: {
          name: this.name,
          idNumber: this.idNumber,
          phone: this.phone
        }
      })
    );
  }

  // Called when the user clicks Next to proceed to loan details
  handleNextClick() {
    // Ensure parent has latest values before moving on
    this.sendDataToParent();
    this.dispatchEvent(new CustomEvent("nextstep"));
  }
}
