import { AzureFunction, Context, HttpRequest } from "@azure/functions";

import { WebClient } from "@slack/web-api";
import { appMention } from "./app-mention";
import { handleAction } from "../handle-action";
import { handleEvent } from "./handle-event";
import { urlVerification } from "./url-verification";

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<any> {
    if (process.env.SLACK_BOT_TOKEN == null) {
        throw Error("No token defined");
    }

    const doAction = handleAction(new WebClient(process.env.SLACK_BOT_TOKEN));

    switch (req.body.type) {
        case "event_callback":
            const result = handleEvent([appMention])(req.body.event);

            if (result.handled) {
                await doAction(result.action);
            }
            return;

        case "url_verification":
            return urlVerification(req);

        default:
            return;
    }
};

export default httpTrigger;
