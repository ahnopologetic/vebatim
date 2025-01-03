import { AutoLayout, useSyncedState } from "../lib";
import { EventCursor } from "../lib/ui/components/event-cursor";

export const EventWidget = () => {
    const [toggled, setToggled] = useSyncedState('toggled', false);
    return (
        <AutoLayout
            direction="vertical"
            name="Event Widget"
            width={`hug-contents`}
            verticalAlignItems="center"
            horizontalAlignItems="center"
            rotation={45}
        >
            <EventCursor
                onClick={() => { setToggled(!toggled); console.log('toggled', toggled) }}
            />
        </AutoLayout>
    );
};
