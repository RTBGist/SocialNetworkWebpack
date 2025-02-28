import { fn } from '@storybook/test';
import { AppLink, AppLinkTheme } from './AppLink';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        onClick: fn(),
        to: '/',
    },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'text',
    },
};

export const Secondary = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'text',
    },
};
