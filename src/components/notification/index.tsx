import React, { useEffect } from "react";

interface INotification {
    message: string | null;
    onClose: (message: string) => void;
    duration?: number;
    isError?: boolean;
}

const Notification = ({ message, onClose, duration = 5000, isError = false }: INotification) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose("");
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={`fixed top-20 right-4 w-80 ${isError ? "bg-red-500" : "bg-green-500"} text-white p-4 rounded shadow-lg`}>
            <p>{message}</p>
        </div>
    );
}

export default Notification;
