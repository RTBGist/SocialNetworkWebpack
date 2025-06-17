import { classNames } from 'shared/lib/className/classNames';
import { useTranslation } from 'react-i18next';
import { Button, BUTTON_THEME } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string,
    short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={BUTTON_THEME.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};
