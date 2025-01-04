import { AutoLayout, Text } from "../../../lib";
import { EventInfo, EventProperty } from "../../../shared/types";

interface EventDetailsProps {
    eventInfo: EventInfo;
    eventProperties: EventProperty[];
}

export function EventDetails({ eventInfo, eventProperties }: EventDetailsProps) {
    return (
        <AutoLayout
            direction="vertical"
            name="Event Details"
            width={320}
            height="hug-contents"
            fill="#FFFFFF"
            padding={16}
            cornerRadius={8}
            stroke="#E5E7EB"
            strokeWidth={1}
            spacing={12}
        >
            {/* Header Section */}
            <AutoLayout
                direction="vertical"
                width="fill-parent"
                spacing={4}
            >
                <Text
                    fontSize={16}
                    fontWeight={600}
                    fill="#111827"
                >
                    {eventInfo.name}
                </Text>
                <Text
                    fontSize={14}
                    fill="#6B7280"
                    width="fill-parent"
                >
                    {eventInfo.description}
                </Text>
            </AutoLayout>

            {/* Properties Section */}
            {eventProperties.length > 0 && (
                <AutoLayout
                    direction="vertical"
                    width="fill-parent"
                    spacing={8}
                >
                    <Text
                        fontSize={14}
                        fontWeight={500}
                        fill="#374151"
                    >
                        Properties
                    </Text>

                    {eventProperties.map((property) => (
                        <AutoLayout
                            key={property.name}
                            direction="horizontal"
                            width="fill-parent"
                            padding={8}
                            cornerRadius={4}
                            fill="#F3F4F6"
                            spacing={8}
                        >
                            <Text
                                fontSize={13}
                                fill="#374151"
                                width="fill-parent"
                            >
                                {property.name}
                            </Text>
                            <Text
                                fontSize={13}
                                fill="#6B7280"
                            >
                                {property.type}
                            </Text>
                        </AutoLayout>
                    ))}
                </AutoLayout>
            )}
        </AutoLayout>
    );
} 