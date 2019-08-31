import { AzureFunction, Context, HttpRequest } from "@azure/functions";

import { urlVerification } from "./url-verification";

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
    const responseBody = urlVerification(req);

    context.res = {
        body: responseBody
    };
};

export default httpTrigger;
