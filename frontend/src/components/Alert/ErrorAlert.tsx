import React from 'react'

interface ErrorAlertProps {
    error: Error
}

export default function ErrorAlert({ error }: ErrorAlertProps) {
    return (
        <div role="alert" className="w-full h-64 flex justify-center items-center">
            <div className="bg-red-500 text-white font-bold rounded-lg border shadow-lg p-5">
                {error.message}
            </div>
        </div>
    )
}
