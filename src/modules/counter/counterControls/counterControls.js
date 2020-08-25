import { LightningElement } from 'lwc';
import { dispatcher } from '../../dispatcher/dispatcher';

export default class CounterControls extends LightningElement {
    decrease() {
        dispatcher.disparch({ type: 'DECRIESE-TO-ONE' });
    }

    reset() {
        dispatcher.disparch({ type: 'RESET-COUNTER' });
    }

    increase() {
        dispatcher.disparch({ type: 'INCRIESE-TO-ONE' });
    }
}
