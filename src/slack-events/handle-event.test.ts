import { EventResult, handleEvent } from "./handle-event";

describe("handleEvent(eventHandlers)(event)", () => {
    const matchingEventHandler = {
        eventName: "app_mention",
        handler: (event: any) => ({
            type: "postMessage" as "postMessage",
            channel: "channel",
            text: event.data
        })
    };

    const nonMatchingEventHandler = {
        eventName: "other_event",
        handler: () => {
            throw Error("Should not be called");
        }
    };

    const event = {
        type: "app_mention",
        data: "eventData"
    };

    assert({
        given: "matching event handler",
        should: "run handler",
        actual: handleEvent([matchingEventHandler])(event),
        expected: {
            handled: true,
            action: {
                type: "postMessage",
                channel: "channel",
                text: "eventData"
            }
        } as EventResult
    });

    assert({
        given: "no matching event handler",
        should: "report not handled",
        actual: handleEvent([nonMatchingEventHandler])(event),
        expected: { handled: false }
    });
});
