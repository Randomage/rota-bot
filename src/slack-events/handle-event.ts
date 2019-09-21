export interface HandledEvent {
    handled: true;
    action: Action;
}

export interface UnhandledEvent {
    handled: false;
}

export type EventResult = HandledEvent | UnhandledEvent;

export const handleEvent = (eventHandlers: EventHandler[]) => (event: any): EventResult => {
    const match = eventHandlers.find(h => h.eventName === event.type);

    return match ? { handled: true, action: match.handler(event) } : { handled: false };
};
