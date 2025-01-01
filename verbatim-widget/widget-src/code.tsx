import useWidgetInit from "./hooks/use-widget-init";
import { Layout } from "./lib/ui/components/layout";
import { WidgetInit } from "./pages/init-widget";

function MainWidget() {
  const { widgetType } = useWidgetInit();
  return (
    <Layout>
      {widgetType === 'init' && <WidgetInit />}
    </Layout>
  );
}
figma.widget.register(MainWidget);