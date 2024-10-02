import React from "react";

interface IProductRejection {
    rejectionReason: string;
    setShowModal: (show: boolean) => void;
    setRejectionReason: (reason: string) => void;
    handleProductRejection: () => void;
}

const ProductRejection = ({
    rejectionReason,
    setRejectionReason,
    setShowModal,
    handleProductRejection
}: IProductRejection) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-lg font-semibold mb-4">Reject Product</h2>
                <textarea
                    className="w-full h-24 p-2 border rounded"
                    placeholder="Enter reason for rejection..."
                    defaultValue={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                />
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
                        onClick={() => {
                            setShowModal(false);
                            setRejectionReason("");
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded"
                        onClick={() => handleProductRejection()}
                    >
                        Reject
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductRejection;