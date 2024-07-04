import { classNames } from 'shared/lib/className/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import * as cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = (props: PageLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
