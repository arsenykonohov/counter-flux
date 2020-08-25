import { LightningElement } from 'lwc';
import { counterStorage } from '../../storages/storages';
import { dispatcher } from '../../dispatcher/dispatcher';

export default class Counter extends LightningElement {
    count;

    constructor() {
        super();
        counterStorage.subscribe(this.renderCallback.bind(this));
    }

    connectedCallback() {
        dispatcher.disparch({ type: 'INIT' });
    }

    renderCallback(state) {
        this.count = state;
    }
}
