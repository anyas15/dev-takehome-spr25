import React from "react";

type BadgeVariant = "pending" | "approved" | "rejected" | "completed";

interface BadgeProps {
    variant: BadgeVariant;
    label?: string;
}

export default function Badge({ variant, label }: BadgeProps) {
    const baseStyles = "flex items-center px-2 py-1 rounded-tl-lg text-xs font-medium";

    const variantStyles: Record<BadgeVariant, string> = {
        pending: "bg-orange-100 text-orange-800",
        approved: "bg-yellow-100 text-yellow-800",
        rejected: "bg-red-100 text-red-800",
        completed: "bg-green-100 text-green-800"
    };

    const dotStyles: Record<BadgeVariant, string> = {
        pending: "bg-orange-500",
        approved: "bg-yellow-500",
        rejected: "bg-red-500",
        completed: "bg-green-500"
    };

    return (
        <div className={`${baseStyles} ${variantStyles[variant]}`}>
            <span className={`w-2 h-2 rounded-full mr-2 ${dotStyles[variant]}`}></span>
            {label}
        </div>
    );
}