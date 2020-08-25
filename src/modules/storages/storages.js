class CounterStorage {
    state;
    subscribers;

    constructor() {
        this.state = 0;
        this.subscribers = [];
    }

    subscribe(renderCallback) {
        this.subscribers.push(renderCallback);
    }

    sendStateToSubscribers() {
        this.subscribers.forEach((renderCallback) =>
            renderCallback(this.state)
        );
    }

    incrieseTo(num) {
        this.state += num;
    }

    decrieseTo(num) {
        this.state -= num;
    }

    resetState() {
        this.state = 0;
    }
}

const counterStorage = new CounterStorage();

export { counterStorage };
