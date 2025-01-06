import { useState } from 'react';
import { Colors } from '../../widget/shared/styles/colors';
import { EventInfo, EventProperty } from '../../widget/shared/types';
import { Layout } from '../components/ui/layout';
import { useAppContext } from '../lib/contexts/app';

interface ExportableEvent extends EventInfo {
    properties: EventProperty[];
    isSelected: boolean;
    status: string;
    version: string;
    nodeId: string;
}

interface FormattedEvent {
    'Event Name': string;
    'Description': string;
    'Status': string;
    'Version': string;
    [key: string]: string;
}

export const ExportEvents = () => {
    const { propsFromWidget } = useAppContext();
    const [events, setEvents] = useState<ExportableEvent[]>(
        (propsFromWidget.events || []).map((event: any) => ({
            ...event,
            isSelected: false,
            status: event.status || 'Not Started',
            version: event.version || '1.0'
        }))
    );
    const [copied, setCopied] = useState(false);

    const handleSelectAll = (checked: boolean) => {
        setEvents(events.map(event => ({ ...event, isSelected: checked })));
    };

    const handleSelectEvent = (index: number, checked: boolean) => {
        setEvents(events.map((event, i) =>
            i === index ? { ...event, isSelected: checked } : event
        ));
    };

    const formatEventForExport = (event: ExportableEvent) => {
        const baseInfo = {
            'Event Name': event.name,
            'Description': event.description,
            'Status': event.status || 'Not Started',
            'Version': event.version || '1.0'
        };

        // Add properties with their details
        const propertyDetails = event.properties.reduce((acc, prop, index) => ({
            ...acc,
            [`Property ${index + 1} Name`]: prop.name,
            [`Property ${index + 1} Type`]: prop.type,
            [`Property ${index + 1} Description`]: prop.description
        }), {});

        return { ...baseInfo, ...propertyDetails };
    };

    const handleCopyToClipboard = async () => {
        const selectedEvents = events.filter(event => event.isSelected);
        if (selectedEvents.length === 0) return;

        const formattedEvents = selectedEvents.map(formatEventForExport);

        // Convert to CSV format
        const headers = Object.keys(formattedEvents[0]);
        const csvContent = [
            headers.join('\t'),
            ...formattedEvents.map(event =>
                headers.map(header => event[header as keyof typeof event] || '').join('\t')
            )
        ].join('\n');

        try {
            await navigator.clipboard.writeText(csvContent);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <Layout>
            <div className="p-6 max-w-6xl mx-auto w-full">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Export Events</h1>
                    <button
                        onClick={handleCopyToClipboard}
                        disabled={!events.some(e => e.isSelected)}
                        style={{
                            backgroundColor: events.some(e => e.isSelected) ? Colors.blue[500] : Colors.gray[300],
                            cursor: events.some(e => e.isSelected) ? 'pointer' : 'not-allowed'
                        }}
                        className="px-4 py-2 text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {copied ? 'Copied!' : 'Copy to Clipboard'}
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden max-h-[calc(100vh-200px)]">
                    <div className="overflow-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 sticky top-0 z-10">
                                <tr>
                                    <th className="px-6 py-3 text-left bg-gray-50">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 bg-muted dark:bg-gray-700"
                                                onChange={(e) => handleSelectAll(e.target.checked)}
                                                checked={events.length > 0 && events.every(e => e.isSelected)}
                                            />
                                        </div>
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                                        Event Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                                        Description
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                                        Properties
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {events.map((event, index) => (
                                    <tr key={event.name} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 bg-muted dark:bg-gray-700"
                                                checked={event.isSelected}
                                                onChange={(e) => handleSelectEvent(index, e.target.checked)}
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {event.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">
                                                {event.description}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">
                                                {event.properties.length} properties
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                                ${event.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                                    event.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-gray-100 text-gray-800'}`}>
                                                {event.status || 'Not Started'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}; 