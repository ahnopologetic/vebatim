import { AutoLayout } from '../lib';
import { openCreateEventIframe } from '../lib/open-iframe';
import { Button } from '../lib/ui/components/button';
import { ColorStyles } from '../shared/styles';

export const WidgetInit = () => {
  return (
    <AutoLayout
      padding={16}
      verticalAlignItems={'center'}
      horizontalAlignItems={'center'}
      direction="vertical"
      spacing={16}
      width={440}
      fill={ColorStyles.surface.background}
      stroke={ColorStyles.border}
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
          onClick={openCreateEventIframe}
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