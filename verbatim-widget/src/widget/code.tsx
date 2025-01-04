import { useSetPropertyMenu } from "./hooks/use-set-property-menus";
import useWidgetInit from "./hooks/use-widget-init";
import { Layout } from "./lib/ui/components/layout";
import { EventWidget } from "./pages/event-widget";
import { WidgetInit } from "./pages/init-widget";

function MainWidget() {
  const { widgetType, eventInfo, eventProperties, widgetNodeId } = useWidgetInit();
  useSetPropertyMenu(widgetType, widgetNodeId);

  return (
    <Layout>
      {widgetType === 'init' && <WidgetInit />}
      {widgetType === 'event' && <EventWidget eventInfo={eventInfo} eventProperties={eventProperties} widgetNodeId={widgetNodeId} />}
    </Layout>
  );
}
figma.widget.register(MainWidget);