interface PostMessage {
    type: "postMessage";
    channel: string;
    text: string;
}

interface NoAction {
    type: "noAction";
}

type Action = NoAction | PostMessage;
