import { handleAction } from "./handle-action";

describe("handleAction(webClient)(action)", () => {
    const webClient = {
        chat: {
            postMessage: (...args: any[]) => Promise.resolve(args)
        }
    } as any;

    assert({
        given: "no action",
        should: "do nothing",
        actual: handleAction(webClient)({ type: "noAction" }),
        expected: { success: true }
    });

    assert({
        given: "post message action",
        should: "post message",
        actual: handleAction(webClient)({ type: "postMessage", channel: "channel", text: "text" }),
        expected: { success: true, result: [{ channel: "channel", text: "text" }] as any }
    });
});
