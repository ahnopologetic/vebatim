
import { AutoLayout } from '../../../lib';
import { borderRadius } from '../../../shared/styles';

type LayoutProps = AutoLayoutProps;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <AutoLayout
      overflow="visible"
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