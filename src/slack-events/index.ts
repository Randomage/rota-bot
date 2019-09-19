import { AzureFunction, Context, HttpRequest } from "@azure/functions";

import { handleEvent } from "./handle-event";
import { urlVerification } from "./url-verification";

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<any> {
    if (process.env.SLACK_BOT_TOKEN == null) {
        throw Error("No token defined");
    }

    switch (req.body.type) {
        case "event_callback":
            return await handleEvent(req.body.event, process.env.SLACK_BOT_TOKEN);

        case "url_verification":
            return urlVerification(req);

        default:
            return;
    }
};

export default httpTrigger;
