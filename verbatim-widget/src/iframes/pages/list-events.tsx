import { useState } from 'react';
import { UserEvent } from '../../widget/shared/types';
import { Layout } from '../components/ui/layout';

export const ListEvents = () => {
    const [events, setEvents] = useState<UserEvent[]>([]);

    return (
        <Layout>
            <div className="p-6 max-w-2xl mx-auto w-full">
                <h1 className="text-2xl font-semibold mb-6">Event List</h1>

                <div className="space-y-4">
                    {events.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            No events created yet
                        </div>
                    ) : (
                        events.map((event) => (
                            <div
                                key={event.id}
                                className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-medium text-gray-900">{event.name}</h3>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                                {event.properties.length > 0 && (
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium text-gray-700">Properties:</h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {event.properties.map((prop, index) => (
                                                <div
                                                    key={index}
                                                    className="text-xs px-2 py-1 bg-gray-50 rounded"
                                                >
                                                    <span className="font-medium">{prop.name}</span>
                                                    <span className="text-gray-500 ml-1">({prop.type})</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </Layout>
    );
}; 