import useWidgetInit from "./hooks/use-widget-init";
import { Layout } from "./lib/ui/components/layout";
import { EventWidget } from "./pages/event-widget";
import { WidgetInit } from "./pages/init-widget";

function MainWidget() {
  const { widgetType } = useWidgetInit();
  return (
    <Layout>
      {widgetType === 'init' && <WidgetInit />}
      {widgetType === 'event' && <EventWidget />}
    </Layout>
  );
}
figma.widget.register(MainWidget);