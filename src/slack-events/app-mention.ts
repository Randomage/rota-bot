import { post } from "request-promise-native";

interface AppMentionEvent {
    type: "app_mention";
    text: string;
    ts: string;
    channel: string;
    event_ts: string;
    username: string;
}

export const appMention = async (event: AppMentionEvent, token: string) => {
    const response = {
        channel: event.channel,
        text: `I got your message:
> ${event.text}`
    };

    try {
        if (event.username === "RotaBot") {
            return;
        }

        const result = await post("https://slack.com/api/chat.postMessage", {
            headers: { "Content-type": "application/json; charset=UTF-8", Authorization: `Bearer ${token}` },
            body: response,
            json: true
        });

        if (result.ok === false) {
            throw result;
        }

        return result;
    } catch (e) {
        console.log("Failed to POST: ", e);
    }
};
