import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/classNames';
import { Button } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import * as cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input className={cls.loginInput} />
            <Input className={cls.loginInput} />
            <Button className={cls.loginBtn}>
                { t('Войти') }
            </Button>
        </div>
    );
};

export default LoginForm;
