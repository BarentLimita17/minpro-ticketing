import React from "react";

export const TicketDeleteConfirmationModal = ({ onCancel, onConfirm }: { onCancel: () => void, onConfirm: () => void }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-xl w-[300px]">
                <p className="text-gray-800 text-lg font-semibold mb-4">Are you sure you want to delete this ticket?</p>
                <div className="flex justify-center">
                    <button onClick={onConfirm} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-4">Yes</button>
                    <button onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded">No</button>
                </div>
            </div>
        </div>
    );
};
