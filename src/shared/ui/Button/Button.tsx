import { classNames } from 'shared/lib/className/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import * as cls from './Button.module.scss';

export enum BUTTON_THEME {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'

}

export enum BUTTON_SIZE {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: BUTTON_THEME
    size?: BUTTON_SIZE
    className?: string
    square?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        square,
        size = BUTTON_SIZE.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [cls[theme], cls[size], className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
