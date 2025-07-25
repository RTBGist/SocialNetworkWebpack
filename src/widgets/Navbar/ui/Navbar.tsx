import { classNames } from 'shared/lib/className/classNames';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Button, BUTTON_THEME } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import * as cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <div className={classNames(cls.navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button onClick={() => setIsModalOpen(true)} theme={BUTTON_THEME.CLEAR_INVERTED}>{ t('Войти') }</Button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); }}>
                123
            </Modal>
        </>
    );
};
