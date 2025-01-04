import { waitForTask } from '../../widget/lib';
import { EventInfo, EventProperty } from '../shared/types';

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
                width: 440,
                height: 540,
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