import { appMention } from "./app-mention";

export const handleEvent = (event: any): Action => {
    switch (event.type) {
        case "app_mention":
            return appMention(event);
    }

    return { type: "noAction" };
};
