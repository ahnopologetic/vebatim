import { useState } from 'react';
import { Layout } from '../components/ui/layout';
import { Colors } from '../../widget/shared/styles/colors';
import { MESSAGE_TYPES } from '../../widget/shared/message-types';

export interface EventProperty {
    name: string;
    type: 'string' | 'number' | 'boolean';
    description: string;
}

export interface EventForm {
    name: string;
    description: string;
    properties: EventProperty[];
}

export const CreateEvent = () => {
    const [form, setForm] = useState<EventForm>({
        name: '',
        description: '',
        properties: []
    });
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!form.name.trim()) {
            setError('Event name is required');
            return;
        }

        if (!form.description.trim()) {
            setError('Event description is required');
            return;
        }

        // Send message to widget
        parent.postMessage({ 
            pluginMessage: {
                type: MESSAGE_TYPES.CREATE_EVENT,
                data: form
            }
        }, '*');
    };

    const addProperty = () => {
        setForm(prev => ({
            ...prev,
            properties: [...prev.properties, { name: '', type: 'string', description: '' }]
        }));
    };

    const updateProperty = (index: number, field: keyof EventProperty, value: string) => {
        setForm(prev => ({
            ...prev,
            properties: prev.properties.map((prop, i) => 
                i === index ? { ...prop, [field]: value } : prop
            )
        }));
    };

    const removeProperty = (index: number) => {
        setForm(prev => ({
            ...prev,
            properties: prev.properties.filter((_, i) => i !== index)
        }));
    };

    return (
        <Layout>
            <div className="p-6 max-w-2xl mx-auto w-full">
                <h1 className="text-2xl font-semibold mb-6">Create Event</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-600 mb-4">
                            {error}
                        </div>
                    )}
                    
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-default dark:text-white mb-1">
                                Event Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={form.name}
                                onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., button_click, page_view"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-default dark:text-white mb-1">
                                Description
                            </label>
                            <textarea
                                id="description"
                                value={form.description}
                                onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                                placeholder="Describe when and why this event should be tracked"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-default dark:text-white">
                                    Properties
                                </label>
                                <button
                                    type="button"
                                    onClick={addProperty}
                                    className="text-sm text-blue-600 hover:text-blue-700"
                                >
                                    + Add Property
                                </button>
                            </div>
                            
                            <div className="space-y-3">
                                {form.properties.map((property, index) => (
                                    <div key={index} className="flex gap-3 items-start p-3 border border-gray-200 rounded-md">
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                value={property.name}
                                                onChange={(e) => updateProperty(index, 'name', e.target.value)}
                                                className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                                placeholder="Property name"
                                            />
                                        </div>
                                        <div className="w-32">
                                            <select
                                                value={property.type}
                                                onChange={(e) => updateProperty(index, 'type', e.target.value)}
                                                className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                            >
                                                <option value="string">String</option>
                                                <option value="number">Number</option>
                                                <option value="boolean">Boolean</option>
                                            </select>
                                        </div>
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                value={property.description}
                                                onChange={(e) => updateProperty(index, 'description', e.target.value)}
                                                className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                                placeholder="Description"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeProperty(index)}
                                            className="text-red-500 hover:text-red-600"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            style={{ backgroundColor: Colors.blue[500] }}
                            className="px-4 py-2 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Create Event
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};
