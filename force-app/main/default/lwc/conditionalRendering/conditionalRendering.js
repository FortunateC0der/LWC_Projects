import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isClicked = false;
    handleChange(event) {
        this.isClicked = event.target.checked;
    }
}