import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import i18nForTests from '../../i18n/i18nForTests';

export interface componentRenderOptions {
    route?: string,
    initialState?: StateSchema
}

export function componentRender(children: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {children}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
