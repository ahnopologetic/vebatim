import { AutoLayout, useSyncedState } from "../lib";
import { EventCursor } from "../lib/ui/components/event-cursor";
import { EventDetails } from "../lib/ui/components/event-details";
import { EventInfo, EventProperty } from "../shared/types";

type EventWidgetProps = {
    widgetNodeId: string;
}

export const EventWidget = ({ }: EventWidgetProps) => {
    const [toggled, setToggled] = useSyncedState('toggled', false);
    const [eventInfo] = useSyncedState<EventInfo | undefined>('eventInfo', undefined);
    const [eventProperties] = useSyncedState<EventProperty[] | undefined>('eventProperties', undefined);

    const handleClick = () => {
        setToggled(!toggled);
        figma.viewport.scrollAndZoomIntoView([]);
    }

    return (
        <AutoLayout
            direction="horizontal"
            name="Event Widget"
            width="hug-contents"
            height="hug-contents"
            spacing={8}
        >
            <EventCursor
                onClick={handleClick}
                rotation={45}
            />

            {toggled && (
                <EventDetails
                    eventInfo={eventInfo}
                    eventProperties={eventProperties}
                />
            )}
        </AutoLayout>
    );
};
