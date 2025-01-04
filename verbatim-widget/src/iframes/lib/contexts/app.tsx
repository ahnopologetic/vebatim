import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MESSAGE_TYPES } from '../../../widget/shared/message-types';


interface AppContextProps {
    propsFromWidget: any;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    isOnline: boolean;
}

export const AppContext = createContext<AppContextProps>({
    propsFromWidget: {},
    setIsLoading: () => { },
    isOnline: true,
});

const OFFLINE_TIMEOUT = 3000;
const ONLINE_TIMEOUT = 1000;

export function useAppContextSetup(): AppContextProps {
    const [propsFromWidget, setPropsFromWidget] = useState<any>({});

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const navigate = useNavigate();

    const handleOffline = useCallback(() => {
        setTimeout(() => setIsOnline(false), OFFLINE_TIMEOUT);
    }, []);

    const handleOnline = useCallback(() => {
        setTimeout(() => setIsOnline(true), ONLINE_TIMEOUT);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        const handleWindowMessage = (
            event: MessageEvent<{
                pluginMessage: {
                    type: MESSAGE_TYPES;
                    data: {
                        route: string;
                        props?: any;
                    };
                };
            }>
        ) => {
            if (event.data.pluginMessage.type === MESSAGE_TYPES.ROUTE_UPDATE) {
                setPropsFromWidget(event.data.pluginMessage.data.props);
                window.parent.postMessage(
                    { pluginMessage: { type: MESSAGE_TYPES.ROUTE_UPDATE } },
                    '*'
                );
                navigate('/' + event.data.pluginMessage.data.route);
            }
            setIsLoading(false);
        };

        window.addEventListener('message', handleWindowMessage);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('message', handleWindowMessage);
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return {
        propsFromWidget,
        isOnline,
        setIsLoading,
    };
}

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const value = useAppContextSetup();
    return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
};

export const useAppContext = () => {
    const value = useContext(AppContext);
    return value;
};