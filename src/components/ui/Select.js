import React, { useState } from 'react';

export const Select = ({ value, onValueChange, children, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (newValue) => {
        onValueChange(newValue);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`}>
            <button
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                {value || 'Select an option'}
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1">
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child, { onClick: handleSelect })
                    )}
                </div>
            )}
        </div>
    );
};

export const SelectTrigger = ({ children }) => {
    return <div>{children}</div>;
};

export const SelectContent = ({ children }) => {
    return <div>{children}</div>;
};

export const SelectItem = ({ value, onClick, children }) => {
    return (
        <button
            className="w-full px-4 py-2 hover:bg-gray-100 text-left"
            onClick={() => onClick(value)}
        >
            {children}
        </button>
    );
};

export const SelectValue = ({ placeholder }) => {
    return <span>{placeholder}</span>;
};

