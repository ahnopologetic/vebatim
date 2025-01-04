import { useEffect, usePropertyMenu, useSyncedState, useWidgetNodeId } from "../lib/index";
import { MESSAGE_TYPES } from "../shared/message-types";
import { createLabel } from "../usecases/create/create-label";

export type WidgetType = 'init' | 'create' | 'event'

const useWidgetInit = () => {
    const [widgetType] = useSyncedState<WidgetType>('widgetType', 'init');
    const widgetNodeId = useWidgetNodeId();

    useEffect(() => {
        figma.ui.onmessage = async (msg: { data: any, type: MESSAGE_TYPES }) => {
            switch (msg.type) {
                case MESSAGE_TYPES.CREATE_EVENT:
                    createLabel(msg.data, widgetNodeId);
                    figma.notify('Event created');
                    figma.closePlugin();
                    break;
                case MESSAGE_TYPES.UPDATE_EVENT:
                    figma.notify('Update Event');
                    break;
                case MESSAGE_TYPES.DELETE_EVENT:
                    figma.notify('Delete Event');
                    break;
                case MESSAGE_TYPES.LIST_EVENTS:
                    figma.notify('List Events');
                    break;
                default:
                    figma.notify('Unknown Message');
                    break;
            }
        };
    });

    return { widgetType };
};


export default useWidgetInit;
