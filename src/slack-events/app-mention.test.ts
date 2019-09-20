import { appMention } from "./app-mention";

describe("appMention(event, token)", () => {
    const message = (username: string) => ({
        channel: "channelId",
        username,
        text: "message body",
        type: "app_mention" as "app_mention",
        event_ts: "",
        ts: ""
    });

    const response = () => ({
        type: "postMessage" as "postMessage",
        channel: "channelId",
        text: `I got your message:
> message body`
    });

    assert({
        given: "message from user",
        should: "reply with 'I got your message'",
        actual: appMention(message("user")),
        expected: response()
    });

    assert({
        given: "message from RotaBot",
        should: "not reply",
        actual: appMention(message("RotaBot")),
        expected: { type: "noAction" }
    });
});
