import { usePropertyMenu } from "../lib";

const HOME_SVG_SRC = `
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 16 16" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z" fill="#FFFFFF"/>
</svg>
`

export const useSetPropertyMenu = (widgetType: string, mainWidgetId: string, widgetNodeId: string) => {
    const focusOnMainWidget = async() => {
        const mainWidget = await figma.getNodeByIdAsync(mainWidgetId) as WidgetNode;
        if (mainWidget) {
            figma.viewport.scrollAndZoomIntoView([mainWidget]);
            figma.currentPage.selection = [mainWidget];
        }
    }
    
    const deleteWidget = async () => {
        const widgetNode = await figma.getNodeByIdAsync(widgetNodeId) as WidgetNode;
        if (widgetNode) {
            widgetNode.remove();
        }
    }

    const eventTypeWidgetPropertyMenu: WidgetPropertyMenuItem[] = [
        {
            itemType: 'action',
            propertyName: 'home',
            tooltip: 'Home',
            icon: HOME_SVG_SRC
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
        ({ propertyName }) => {
            if (widgetType === 'event') {
                switch (propertyName) {
                    case 'home':
                        focusOnMainWidget();
                        break;
                    case 'delete':
                        deleteWidget();
                        break;
                }
            }
        }
    )
}