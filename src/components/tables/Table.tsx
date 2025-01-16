import React from "react";
import Dropdown from "../atoms/Dropdown";

type BadgeVariant = "pending" | "approved" | "rejected" | "completed";

interface TableRow {
    itemId: string;
    name: string;
    requestedItem: string;
    createdDate: string;
    updatedDate: string;
    status: BadgeVariant;
}

interface TableProps {
    data: TableRow[];
    onStatusUpdate: (itemId: string, newStatus: BadgeVariant) => void;
}

export default function Table({ data, onStatusUpdate }: TableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="bg-white text-gray-700 border-b border-gray-300">
                        <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Item Requested</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Created</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Updated</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.itemId} className="bg-white text-gray-700 border-b border-gray-300">
                        <td className="px-4 py-2 text-sm">{row.name}</td>
                        <td className="px-4 py-2 text-sm">{row.requestedItem}</td>
                        <td className="px-4 py-2 text-sm">{row.createdDate}</td>
                        <td className="px-4 py-2 text-sm">{row.updatedDate}</td>
                        <td className="px-4 py-2 text-sm">
                            <Dropdown
                                options={[
                                    { label: "Pending", variant: "pending" },
                                    { label: "Approved", variant: "approved" },
                                    { label: "Rejected", variant: "rejected" },
                                    { label: "Completed", variant: "completed" },
                                ]}
                                onSelect={(newStatus) => onStatusUpdate(row.itemId, newStatus)}
                            />
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}