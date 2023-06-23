import React, { ChangeEvent } from 'react';

interface DropdownProps {
    label: string;
    name: string;
    options: string[];
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, ...props }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <select
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                {...props}
            >
                {options.map((option) => (
                    <option key={option} value={option} disabled={option === label}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
