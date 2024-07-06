import { useState } from 'react';
import { classNames } from 'shared/lib/className/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import * as cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button data-testid="siderbar-toggle" type="button" onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
