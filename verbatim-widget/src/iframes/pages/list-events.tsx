import { useEffect, useState } from 'react';
import { Layout } from '../components/ui/layout';
import { useAppContext } from '../lib/contexts/app';

export const ListEvents = () => {
    const { propsFromWidget } = useAppContext();
    const [events, setEvents] = useState<{ [name: string]: string }>({});

    useEffect(() => {
        if (propsFromWidget?.eventMap) {
            setEvents(propsFromWidget.eventMap);
        }
    }, [propsFromWidget]);

    const handleFocusNode = (nodeId: string) => {
        parent.postMessage(
            {
                pluginMessage: {
                    type: 'focus-node',
                    data: {
                        nodeId
                    }
                }
            },
            '*'
        );
    };

    return (
        <Layout>
            <div className="p-6 max-w-2xl mx-auto w-full">
                <h1 className="text-2xl font-semibold mb-6">Event List</h1>

                <div className="space-y-4">
                    {Object.keys(events).length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            No events created yet
                        </div>
                    ) : (
                        Object.keys(events).map((event) => (
                            <div
                                key={event}
                                className="p-4 border border-gray-200 rounded-lg hover:border-blue-500"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-medium text-gray-900">{event}</h3>
                                    <button
                                        onClick={() => handleFocusNode(events[event])}
                                        className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                    >
                                        Focus
                                    </button>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{events[event]}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </Layout>
    );
}; 