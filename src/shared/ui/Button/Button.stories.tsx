import { fn } from '@storybook/test';
import { Button, BUTTON_SIZE, BUTTON_THEME } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        children: 'Text',
    },
};

export const Clear = {
    args: {
        children: 'Text',
        theme: BUTTON_THEME.CLEAR,
    },
};

export const Outline = {
    args: {
        children: 'Text',
        theme: BUTTON_THEME.OUTLINE,
    },
};

export const OutlineSizeM = {
    args: {
        children: 'Text',
        size: BUTTON_SIZE.M,
        theme: BUTTON_THEME.OUTLINE,
    },
};

export const OutlineSizeL = {
    args: {
        children: 'Text',
        size: BUTTON_SIZE.L,
        theme: BUTTON_THEME.OUTLINE,
    },
};

export const OutlineSizeXL = {
    args: {
        children: 'Text',
        size: BUTTON_SIZE.XL,
        theme: BUTTON_THEME.OUTLINE,
    },
};

export const Background = {
    args: {
        children: 'Text',
        theme: BUTTON_THEME.BACKGROUND,
    },
};

export const BackgroundInverted = {
    args: {
        children: 'Text',
        theme: BUTTON_THEME.BACKGROUND_INVERTED,
    },
};

export const Square = {
    args: {
        children: '>',
        square: true,
        theme: BUTTON_THEME.BACKGROUND_INVERTED,
    },
};

export const SquareSizeM = {
    args: {
        children: '>',
        square: true,
        size: BUTTON_SIZE.M,
        theme: BUTTON_THEME.BACKGROUND_INVERTED,
    },
};

export const SquareSizeL = {
    args: {
        children: '>',
        square: true,
        size: BUTTON_SIZE.L,
        theme: BUTTON_THEME.BACKGROUND_INVERTED,
    },
};

export const SquareSizeXL = {
    args: {
        children: '>',
        square: true,
        size: BUTTON_SIZE.XL,
        theme: BUTTON_THEME.BACKGROUND_INVERTED,
    },
};
