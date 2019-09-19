import { appMention } from "./app-mention";

export const handleEvent = async (event: any, token: string) => {
    switch (event.type) {
        case "app_mention":
            return await appMention(event, token);
    }
};
