interface AppMentionEvent {
    type: "app_mention";
    text: string;
    ts: string;
    channel: string;
    event_ts: string;
    username: string;
}

const appMentionHandler = (event: AppMentionEvent): Action => {
    if (event.username === "RotaBot") {
        return { type: "noAction" };
    }

    return {
        type: "postMessage",
        channel: event.channel,
        text: `I got your message:
> ${event.text}`
    };
};

export const appMention = {
    eventName: "app_mention",
    handler: appMentionHandler
};
