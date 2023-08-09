import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const TextInput =  forwardRef(function TextInput({ type = 'text', className = '', defaultValue, variant = 'primary', placeholder, isError, isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={
                    `rounded-2xl bg-form-bg py-[13px] ${isError && 'input-error'} px-7 w-full input-${variant} ${className}`
                }
                placeholder={placeholder}
                ref={input}
                defaultValue={defaultValue}
            />
        </div>
    );
});


TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool
}

export default TextInput;
