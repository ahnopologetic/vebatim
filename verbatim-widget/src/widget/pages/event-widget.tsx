import { AutoLayout, useSyncedState } from "../lib";
import { EventCursor } from "../lib/ui/components/event-cursor";
import { EventDetails } from "../lib/ui/components/event-details";
import { EventInfo, EventProperty } from "../shared/types";

type EventWidgetProps = {
    widgetNodeId: string;
    eventInfo: EventInfo;
    eventProperties: EventProperty[];
}

export const EventWidget = ({ eventInfo, eventProperties }: EventWidgetProps) => {
    const [toggled, setToggled] = useSyncedState('toggled', false);
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
