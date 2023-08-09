import PropTypes from 'prop-types';

const Button = function Button({
    className = '', disabled, children, processing = false, variant="primary", ...props }) {
    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] text-center w-full ${processing && "opacity-30"} btn-${variant} ${className}`}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type : PropTypes.oneOf(['button', 'submit', 'reset']),
    className : PropTypes.string,
    disabled : PropTypes.bool,
    children : PropTypes.node,
    variant : PropTypes.oneOf(['primary','warning', 'danger', 'light-outline', 'white-outline']),
    processing: PropTypes.bool,
}

export default Button;
