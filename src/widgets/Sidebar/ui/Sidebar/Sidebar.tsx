import React, { useState } from 'react';
import { classNames } from 'shared/lib/className/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, BUTTON_SIZE, BUTTON_THEME } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import * as cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="siderbar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={BUTTON_THEME.BACKGROUND_INVERTED}
                size={BUTTON_SIZE.XL}
                square
            >
                { collapsed ? '>' : '<'}
            </Button>
            <div className={cls.links}>
                <AppLink className={cls.linkWrap} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.linkText}>{t('Главная')}</span>
                </AppLink>

                <AppLink className={cls.linkWrap} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.linkText}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
