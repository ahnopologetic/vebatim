import { AutoLayout, Text } from "@/lib/index";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  appearance?: 'primary' | 'secondary';
  width?: number | 'fill-parent';
  disabled?: boolean;
}

export function Button({
  text,
  onClick,
  size = 'medium',
  appearance = 'primary',
  width,
  disabled = false
}: ButtonProps) {
  const padding = {
    small: { horizontal: 12, vertical: 6 },
    medium: { horizontal: 16, vertical: 8 },
    large: { horizontal: 24, vertical: 12 }
  };

  const fontSize = {
    small: 12,
    medium: 14, 
    large: 16
  };

  return (
    <AutoLayout
      onClick={disabled ? undefined : onClick}
      fill={appearance === 'primary' ? '#0D99FF' : '#FFFFFF'}
      stroke={appearance === 'secondary' ? '#0D99FF' : undefined}
      strokeWidth={1}
      padding={{
        horizontal: padding[size].horizontal,
        vertical: padding[size].vertical
      }}
      cornerRadius={6}
      width={width}
      opacity={disabled ? 0.5 : 1}
      hoverStyle={{
        fill: appearance === 'primary' ? '#0077CC' : '#F5F5F5'
      }}
    >
      <Text
        fontSize={fontSize[size]}
        fill={appearance === 'primary' ? '#FFFFFF' : '#0D99FF'}
        fontWeight={500}
      >
        {text}
      </Text>
    </AutoLayout>
  );
}
