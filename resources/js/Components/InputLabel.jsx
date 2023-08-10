export default function InputLabel({ htmlFor, value, className = '', children, ...props }) {
    return (
        <label {...props} className={`text-base block mb-2` + className} htmlFor={htmlFor}>
            {value ? value : children}
        </label>
    );
}
