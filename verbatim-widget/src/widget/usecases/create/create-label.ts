import { useWidgetNodeId } from "../../lib";
import { UserEvent } from "../../shared/types";

export const createLabel = (userEvent: UserEvent, widgetNodeId: string) => {
    figma.notify('Create Label');

    // clone a widget with type
    const widgetNode = figma.getNodeById(widgetNodeId) as WidgetNode;

    const newWidgetNode = widgetNode.cloneWidget({
        widgetType: 'event'
    });

    newWidgetNode.name = `Verbatim Event: ${userEvent.name}`;
    newWidgetNode.x = 100;
    newWidgetNode.y = 100;

    // TODO: make sure below needed.
    // figma.currentPage.appendChild(newWidgetNode);
};