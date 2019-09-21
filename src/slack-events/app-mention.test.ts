import { appMention } from "./app-mention";

describe("appMention event handler", () => {
    describe("eventName", () => {
        assert({
            given: "always",
            should: "handle app_mention",
            actual: appMention.eventName,
            expected: "app_mention"
        });
    });

    describe("appMention.handler(event, token)", () => {
        const message = (username: string) => ({
            channel: "channelId",
            username,
            text: "message body",
            type: "app_mention" as "app_mention",
            event_ts: "",
            ts: ""
        });

        const response = () =>
            ({
                type: "postMessage" as "postMessage",
                channel: "channelId",
                text: `I got your message:
> message body`
            } as Action);

        assert({
            given: "message from user",
            should: "reply with 'I got your message'",
            actual: appMention.handler(message("user")),
            expected: response()
        });

        assert({
            given: "message from RotaBot",
            should: "not reply",
            actual: appMention.handler(message("RotaBot")),
            expected: { type: "noAction" }
        });
    });
});
