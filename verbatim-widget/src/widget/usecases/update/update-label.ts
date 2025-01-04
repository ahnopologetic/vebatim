import { UserEvent } from "../../shared/types";

export const updateLabel = (userEvent: UserEvent, widgetNodeId: string) => {
    const widgetNode = figma.getNodeById(widgetNodeId) as WidgetNode;
    if (!widgetNode) {
        figma.notify('Widget not found');
        return;
    }

    widgetNode.setWidgetSyncedState({
        widgetType: 'event',
        eventInfo: userEvent,
        eventProperties: userEvent.properties
    });
};