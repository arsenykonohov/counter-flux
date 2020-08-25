import { counterStorage } from '../storages/storages';

class Dispatcher {
    disparch(action) {
        switch (action.type) {
            case 'INCRIESE-TO-ONE':
                counterStorage.incrieseTo(1);
                counterStorage.sendStateToSubscribers();
                break;

            case 'DECRIESE-TO-ONE':
                counterStorage.decrieseTo(1);
                counterStorage.sendStateToSubscribers();
                break;

            case 'RESET-COUNTER':
                counterStorage.resetState();
                counterStorage.sendStateToSubscribers();
                break;

            default:
                counterStorage.sendStateToSubscribers();
                break;
        }
    }
}

export const dispatcher = new Dispatcher();
