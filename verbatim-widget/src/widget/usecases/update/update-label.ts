import { UserEvent } from "../../shared/types";

export const updateLabel = async (userEvent: UserEvent, widgetNodeId: string) => {
    const widgetNode = await figma.getNodeByIdAsync(widgetNodeId) as WidgetNode;
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