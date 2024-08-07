import { classNames } from 'shared/lib/className/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import * as cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string,
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.applink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
