import { useEffect, useState } from "react";
import { getBooks } from "../api/apiCalls";
export default function useGoogleBooks(query, max) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        setIsLoading(true);
        setError(false);
        getBooks(query, max)
            .then((books) => {
                setBooks(books);
            })
            .catch((err) => {
                setError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [query, max]);
    
    return {books, error, isLoading}
}
