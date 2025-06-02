import { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../../src/app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
        withThemeByClassName({
            themes: {
                light: 'app light',
                dark: 'app dark',
            },
            defaultTheme: 'dark',
            parentSelector: 'body',
        }),
    ],
};

export default preview;
