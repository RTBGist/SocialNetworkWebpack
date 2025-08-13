import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            user: userReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
