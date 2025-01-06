import { AutoLayout } from '../lib';
import { openCreateEventIframe, openListEventsIframe } from '../lib/open-iframe';
import { Button } from '../lib/ui/components/button';
import { Header } from '../lib/ui/components/header';
import { IconButton } from '../lib/ui/components/icon-button';
import { borderRadius, ColorStyles } from '../shared/styles';
import { Colors } from '../shared/styles/colors';

const createIconSrc = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17H10M15 16H18M18 16H21M18 16V19M18 16V13M3 12H14M3 7H14" stroke="${Colors.gray[500]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

const listIconSrc = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 17H20M8 15L5.5 18L4 17M11 12H20M8 10L5.5 13L4 12M11 7H20M8 5L5.5 8L4 7" stroke="${Colors.gray[500]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

const exportIconSrc = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6L12 3M12 3L15 6M12 3V13M7.00023 10C6.06835 10 5.60241 10 5.23486 10.1522C4.74481 10.3552 4.35523 10.7448 4.15224 11.2349C4 11.6024 4 12.0681 4 13V17.8C4 18.9201 4 19.4798 4.21799 19.9076C4.40973 20.2839 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07899 21 7.19691 21H16.8036C17.9215 21 18.4805 21 18.9079 20.7822C19.2842 20.5905 19.5905 20.2839 19.7822 19.9076C20 19.4802 20 18.921 20 17.8031V13C20 12.0681 19.9999 11.6024 19.8477 11.2349C19.6447 10.7448 19.2554 10.3552 18.7654 10.1522C18.3978 10 17.9319 10 17 10" stroke="${Colors.gray[500]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

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
      cornerRadius={borderRadius.large}
    >
      <Header />
      <AutoLayout
        verticalAlignItems={'center'}
        horizontalAlignItems={'center'}
        direction="vertical"
        spacing={16}
        width={'fill-parent'}
      >
        <IconButton
          size="large"
          appearance="primary"
          width={'fill-parent'}
          onClick={openCreateEventIframe}
          text="Create Event"
          icon={createIconSrc}
        />
        <IconButton
          size="large"
          appearance="secondary"
          width={'fill-parent'}
          onClick={openListEventsIframe}
          text="List Events"
          icon={listIconSrc}
        />
        <IconButton
          size="large"
          appearance="secondary"
          width={'fill-parent'}
          onClick={() => { }}
          text="Export Events"
          icon={exportIconSrc}
        />
      </AutoLayout>
    </AutoLayout>
  );
};