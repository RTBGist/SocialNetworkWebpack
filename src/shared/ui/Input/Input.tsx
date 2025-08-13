import React, {
    InputHTMLAttributes, memo, useRef,
} from 'react';
import { classNames } from 'shared/lib/className/classNames';
import * as cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: 'text' | 'number';
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder = '',
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.input, {}, [className])}>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
            />
        </div>
    );
});

export default Input;
