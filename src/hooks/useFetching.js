import React, { useState } from "react"


export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (callback) => {
        try {
            setIsLoading(true)
            await callback()
        }
        catch (e) {
            setError(e.massage)
        }
        finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}
