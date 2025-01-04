import { useSetPropertyMenu } from "./hooks/use-set-property-menus";
import useWidgetInit from "./hooks/use-widget-init";
import { useWidgetNodeId } from "./lib";
import { Layout } from "./lib/ui/components/layout";
import { EventWidget } from "./pages/event-widget";
import { WidgetInit } from "./pages/init-widget";

function MainWidget() {
  const { widgetType } = useWidgetInit();
  const widgetNodeId = useWidgetNodeId();

  useSetPropertyMenu(widgetType, widgetNodeId);

  return (
    <Layout>
      {widgetType === 'init' && <WidgetInit />}
      {widgetType === 'event' && <EventWidget />}
    </Layout>
  );
}
figma.widget.register(MainWidget);