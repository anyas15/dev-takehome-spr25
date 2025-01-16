import React, { useState } from "react";
import Badge from "./Badge";

type BadgeVariant = "pending" | "approved" | "rejected" | "completed";

interface DropdownOptions {
    variant: BadgeVariant;
    label?: string;
}

interface DropdownProps {
    options: DropdownOptions[];
    onSelect: (variant: BadgeVariant) => void;
}

export default function Dropdown({ options, onSelect }: DropdownProps) {
    const [selectedOption, setSelectedOption] = useState<DropdownOptions | null>(
        null
      );

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const dropdownStyles = `flex items-center justify-between px-4 py-2 rounded-md border transition w-full 
        ${isOpen ? "bg-white border-blue-500 text-blue-700" : "bg-gray-100 text-gray-700"} 
        hover:bg-blue-100
    `;

    return (
        <div className="relative">
            <button className={dropdownStyles} onClick={toggleDropdown}>
                {selectedOption ? (
                    <Badge variant={selectedOption.variant} label={selectedOption.label} />
                ) : (
                    "Select an option"
                    )}
                    <span className={`transform transition ${isOpen ? "rotate-180" : "rotate-0"}`}>⌄</span>
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-full border border-gray-300 bg-white rounded-md shadow-md z-10">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                setSelectedOption(option); 
                                onSelect(option.variant); 
                                setIsOpen(false); 
                            }}
                        >
                            <Badge variant={option.variant} label={option.label} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}