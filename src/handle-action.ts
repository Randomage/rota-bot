import { WebClient } from "@slack/web-api";

export const handleAction = (webClient: WebClient) => async (action: Action) => {
    switch (action.type) {
        case "noAction":
            return;

        case "postMessage":
            return await webClient.chat.postMessage({ channel: action.channel, text: action.text });
    }
};

export const handleActions = (webClient: WebClient, actions: Action[]) =>
    Promise.all(actions.map(handleAction(webClient)));
