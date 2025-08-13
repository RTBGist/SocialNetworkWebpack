import { classNames } from 'shared/lib/className/classNames';
import { useTranslation } from 'react-i18next';
import React, {useCallback, useState} from 'react';
import { Button, BUTTON_THEME } from 'shared/ui/Button/Button';
import * as cls from './Navbar.module.scss';
import {LoginModal} from "features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsModalOpen(true)
    }, [])

    return (
        <>
            <div className={classNames(cls.navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button onClick={onOpenModal} theme={BUTTON_THEME.CLEAR_INVERTED}>{ t('Войти') }</Button>
                </div>
            </div>

            <LoginModal isOpen={isModalOpen} onClose={onCloseModal} />
        </>
    );
};
