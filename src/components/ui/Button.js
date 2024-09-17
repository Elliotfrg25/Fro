import React from 'react';

const Button = ({ variant = 'solid', size = 'md', children, className = '', ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none';
    const variantStyles = {
        solid: 'bg-blue-500 text-white hover:bg-blue-600',
        outline: 'border border-blue-500 text-blue-500 hover:bg-blue-100',
    };
    const sizeStyles = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2',
        lg: 'px-5 py-3 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

