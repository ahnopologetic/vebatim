
import { borderRadius, ColorStyles } from '../../../shared/styles';
import { AutoLayout } from '../../../lib';

interface LayoutProps extends AutoLayoutProps {}

export const Layout = ({ children }: LayoutProps) => {

  return (
    <AutoLayout
      overflow={'hidden'}
      name="Widget Layout"
      verticalAlignItems={'center'}
      horizontalAlignItems={'center'}
      direction="vertical"
      cornerRadius={borderRadius.large}
      width={`hug-contents`}
    >
      <AutoLayout
        verticalAlignItems={'center'}
        horizontalAlignItems={'center'}
        direction="vertical"
        width={'hug-contents'}
      >
        {children}
      </AutoLayout>
    </AutoLayout>
  );
};