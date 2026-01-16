import { LightningElement, api } from 'lwc';

export default class AccountCard extends LightningElement {
    @api accountName = 'Refiloe Motaung';
    @api balance = '2500';
}
