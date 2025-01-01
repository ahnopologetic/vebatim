
import { borderRadius, ColorStyles } from '../../../shared/styles';
import { AutoLayout } from '../../../lib';

interface LayoutProps extends AutoLayoutProps {}

export const Layout = ({ children }: LayoutProps) => {

  return (
    <AutoLayout
    //   overflow={modal.openedModal ? 'visible' : 'hidden'}
      overflow={'hidden'}
      name="Layout"
      verticalAlignItems={'center'}
      horizontalAlignItems={'center'}
      direction="vertical"
      cornerRadius={borderRadius.large}
      fill={ColorStyles.surface.background}
      stroke={ColorStyles.border}
      width={440}
    >
      <AutoLayout
        verticalAlignItems={'center'}
        horizontalAlignItems={'center'}
        direction="vertical"
        width={'fill-parent'}
      >
        {children}
      </AutoLayout>
    </AutoLayout>
  );
};