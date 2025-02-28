import { classNames } from 'shared/lib/className/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import * as cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, children, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.button, {}, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
