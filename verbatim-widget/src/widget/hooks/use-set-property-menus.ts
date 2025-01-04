import { usePropertyMenu } from "../lib";

export const useSetPropertyMenu = (widgetType: string, mainWidgetId: string) => {
    const focusOnMainWidget = () => {
        const mainWidget = figma.getNodeById(mainWidgetId) as WidgetNode;
        if (mainWidget) {
            figma.viewport.scrollAndZoomIntoView([mainWidget]);
            figma.currentPage.selection = [mainWidget];
        }
    }

    const eventTypeWidgetPropertyMenu: WidgetPropertyMenuItem[] = [
        {
            itemType: 'action',
            propertyName: 'home',
            tooltip: 'Go to home',
            icon: 'home'
        },
        {
            itemType: 'separator',
        },
        {
            itemType: 'action',
            propertyName: 'delete',
            tooltip: 'Delete',
        }
    ]

    const getPropertyMenu = (widgetType: string) => {
        if (widgetType === 'event') {
            return eventTypeWidgetPropertyMenu;
        }
        return [];
    }

    usePropertyMenu(
        getPropertyMenu(widgetType),
        ({propertyName}) => {
            if (widgetType === 'event') {
                switch (propertyName) {
                    case 'home':
                        focusOnMainWidget();
                        break;
                    case 'delete':
                        // TODO: delete widget
                        break;
                }
            }
        }
    )
}