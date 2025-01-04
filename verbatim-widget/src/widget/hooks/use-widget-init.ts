import { useEffect, useSyncedState, useWidgetNodeId } from "../lib/index";
import { MESSAGE_TYPES } from "../shared/message-types";
import { createLabel } from "../usecases/create/create-label";
import { updateLabel } from "../usecases/update/update-label";

export type WidgetType = 'init' | 'create' | 'event'

const useWidgetInit = () => {
    const [widgetType] = useSyncedState<WidgetType>('widgetType', 'init');
    const [mainWidgetId, setMainWidgetId] = useSyncedState<string | undefined>('mainWidgetId', undefined);
    const widgetNodeId = useWidgetNodeId();


    useEffect(() => {
        if (widgetType === 'init') {
            figma.clientStorage.setAsync('mainWidgetId', widgetNodeId);
            setMainWidgetId(widgetNodeId);
        }

        figma.clientStorage.getAsync('mainWidgetId').then((mainWidgetId) => {
            setMainWidgetId(mainWidgetId);
        });

        figma.ui.onmessage = async (msg: { data: any, type: MESSAGE_TYPES }) => {
            switch (msg.type) {
                case MESSAGE_TYPES.CREATE_EVENT:
                    createLabel(msg.data, widgetNodeId);
                    figma.notify('Event created');
                    figma.closePlugin();
                    break;
                case MESSAGE_TYPES.UPDATE_EVENT:
                    updateLabel(msg.data, widgetNodeId);
                    figma.notify('Event updated');
                    figma.closePlugin();
                    break;
                case MESSAGE_TYPES.DELETE_EVENT:
                    figma.notify('Delete Event');
                    break;
                case MESSAGE_TYPES.LIST_EVENTS:
                    figma.notify('List Events');
                    break;
                case MESSAGE_TYPES.FOCUS_NODE:
                    const node = figma.getNodeById(msg.data.nodeId);
                    if (node) {
                        figma.currentPage.selection = [node as SceneNode];
                        figma.viewport.scrollAndZoomIntoView([node]);
                    }
                    figma.closePlugin();
                    break;
                case MESSAGE_TYPES.ROUTE_UPDATE:
                    break;
                default:
                    figma.notify('Unknown Message');
                    break;
            }
        };
    });

    return { widgetType, widgetNodeId, mainWidgetId };
};


export default useWidgetInit;
