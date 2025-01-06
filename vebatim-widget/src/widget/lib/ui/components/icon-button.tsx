import { AutoLayout, SVG, Text } from "../../../lib";
import { Colors } from "../../../shared/styles/colors";

interface IconButtonProps {
    icon: string;
    text?: string;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    appearance?: 'primary' | 'secondary';
    width?: number | 'fill-parent';
    disabled?: boolean;
}

export function IconButton({
    icon,
    text,
    onClick,
    size = 'medium',
    appearance = 'primary',
    width,
    disabled = false
}: IconButtonProps) {
    const padding = {
        small: { horizontal: 12, vertical: 6 },
        medium: { horizontal: 16, vertical: 8 },
        large: { horizontal: 24, vertical: 12 }
    };

    const iconSize = {
        small: 16,
        medium: 20,
        large: 24
    };

    const fontSize = {
        small: 12,
        medium: 14,
        large: 16
    };

    return (
        <AutoLayout
            onClick={disabled ? undefined : onClick}
            fill={Colors.white}
            // stroke={Colors.gray[500]}
            // strokeWidth={1}
            padding={{
                horizontal: padding[size].horizontal,
                vertical: padding[size].vertical
            }}
            cornerRadius={6}
            width={width}
            opacity={disabled ? 0.5 : 1}
            spacing={8}
            verticalAlignItems="center"
            hoverStyle={{
                stroke: Colors.gray[600],
            }}
        >
            <AutoLayout
                width={iconSize[size]}
                height={iconSize[size]}
            >
                <SVG
                    src={icon}
                    width={iconSize[size]}
                    height={iconSize[size]}
                />
            </AutoLayout>

            {text && (
                <Text
                    fontSize={fontSize[size]}
                    fill={Colors.black}
                    fontWeight={500}
                >
                    {text}
                </Text>
            )}
        </AutoLayout>
    );
}


