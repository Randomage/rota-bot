import { WebAPICallResult, WebClient } from "@slack/web-api";

interface SucceededAction {
    success: true;
    result: WebAPICallResult;
}

interface SucceededVoidAction {
    success: true;
}

export type ActionResult = SucceededAction | SucceededVoidAction;

export const handleAction = (webClient: WebClient) => async (action: Action): Promise<ActionResult> => {
    switch (action.type) {
        case "noAction":
            return { success: true };

        case "postMessage":
            return {
                success: true,
                result: await webClient.chat.postMessage({ channel: action.channel, text: action.text })
            };
    }
};
