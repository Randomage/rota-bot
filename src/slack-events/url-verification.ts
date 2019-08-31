import { HttpRequest } from "@azure/functions";
import { verifyRequestSignature } from "@slack/events-api";

export const urlVerification = (request: HttpRequest) => {
    verifyRequestSignature({
        signingSecret: process.env.SLACK_SIGNING_SECRET || "",
        requestSignature: request.headers["x-slack-signature"],
        requestTimestamp: Number.parseInt(request.headers["x-slack-request-timestamp"]),
        body: request.rawBody
    });

    return request.body.challenge;
};
