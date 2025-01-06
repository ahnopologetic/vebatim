
export type EventInfo = {
    id: string;
    name: string;
    description: string;
}

export type EventProperty = {
    name: string;
    type: string;
    description: string;
}

export type UserEvent = EventInfo & {
    properties: EventProperty[];
}
