// src/app/providers/StoreProvider.tsx
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../AppStore';

interface StoreProviderProps {
    children: ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
