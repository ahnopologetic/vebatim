import { waitForTask } from '../../widget/lib';
import { EventInfo, EventProperty, UserEvent } from '../shared/types';

export const openPluginUI = (input: {
    routeName: string;
    props: any;
    other?: Record<string, any>;
    options: Pick<ShowUIOptions, 'visible'>;
}) => {
    const {
        routeName,
        props,
        options: { visible },
        other,
    } = input;
    waitForTask(
        new Promise(() => {
            figma.showUI(`${__uiFiles__['main']}`, {
                width: 700,
                height: 600,
                visible,
            });
            figma.ui.postMessage(
                { type: 'route-update', data: { route: routeName, props }, ...other },
                { origin: '*' }
            );
        })
    );
};

export const openCreateEventIframe = () => {
    openPluginUI({
        routeName: 'create-event',
        props: {},
        options: { visible: true },
    });
};

export const openListEventsIframe = () => {
    const widgetNodes: WidgetNode[] = figma.currentPage.findAll(node => {
        return node.type === "WIDGET"
    }) as WidgetNode[];

    const eventMap = widgetNodes.reduce((acc, node) => {
        const name = node.name.split('Verbatim Event: ')[1];
        if (!name) return acc;
        acc[name] = node.id;
        return acc;
    }, {});
    openPluginUI({
        routeName: 'list-events',
        props: { eventMap },
        options: { visible: true },
    });
};

export const openEditEventIframe = (eventInfo: EventInfo, eventProperties: EventProperty[]) => {
    openPluginUI({
        routeName: 'edit-event',
        props: { eventInfo, eventProperties },
        options: { visible: true },
    });
};

export const openExportEventsIframe = () => {
    // Find all widget nodes that are events
    const widgetNodes: WidgetNode[] = figma.currentPage.findAll(node => {
        return node.type === "WIDGET" && node.name.startsWith('Verbatim Event:');
    }) as WidgetNode[];

    // Collect events data from widget nodes
    const events = widgetNodes.map(node => {
        const eventInfo = node.widgetSyncedState['eventInfo'] as EventInfo;
        const eventProperties = node.widgetSyncedState['eventProperties'] as EventProperty[];
        const status = node.widgetSyncedState['status'] as string;
        const version = node.widgetSyncedState['version'] as string;

        return {
            ...eventInfo,
            properties: eventProperties || [],
            status: status || 'Not Started',
            version: version || '1.0',
            nodeId: node.id
        };
    });

    openPluginUI({
        routeName: 'export-events',
        props: { events },
        options: { visible: true },
    });
};