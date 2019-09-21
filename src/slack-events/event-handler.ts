interface EventHandler {
    eventName: string;
    handler: (event: any) => Action;
}
