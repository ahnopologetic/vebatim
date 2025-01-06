import { UserEvent } from "../../shared/types";

export const createLabel = async (userEvent: UserEvent, widgetNodeId: string) => {
    // clone a widget with type
    const widgetNode = await figma.getNodeByIdAsync(widgetNodeId) as WidgetNode;

    if (!widgetNode) {
        figma.notify('Widget not found');
        return;
    }

    const newWidgetNode = widgetNode.cloneWidget({
        widgetType: 'event',
        eventInfo: {
            id: userEvent.id,
            name: userEvent.name,
            description: userEvent.description,
        },
        eventProperties: userEvent.properties,
    });

    newWidgetNode.name = `Verbatim Event: ${userEvent.name}`;
    newWidgetNode.x = widgetNode.x + widgetNode.width + 40;

    return newWidgetNode
};
