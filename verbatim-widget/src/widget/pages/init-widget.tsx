import { AutoLayout } from '../lib';
import { Button } from '../lib/ui/components/button';

export const WidgetInit = () => {
  return (
    <AutoLayout
      padding={16}
      verticalAlignItems={'center'}
      horizontalAlignItems={'center'}
      direction="vertical"
      spacing={16}
      width={'fill-parent'}
    >
      <AutoLayout
        verticalAlignItems={'center'}
        horizontalAlignItems={'center'}
        direction="vertical"
        spacing={16}
        width={'fill-parent'}
      >
        <Button
          size="large"
          appearance="secondary"
          width={'fill-parent'}
          onClick={() => {}}
          text="Create Event"
        />
        <Button
          size="large"
          appearance="secondary"
          width={'fill-parent'}
          onClick={() => {}}
          text="List Events"
        />
        <Button
          size="large"
          appearance="secondary"
          width={'fill-parent'}
          onClick={() => {}}
          text="Export Events"
        />
      </AutoLayout>
    </AutoLayout>
  );
};