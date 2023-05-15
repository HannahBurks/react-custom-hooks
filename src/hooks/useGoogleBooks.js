import { useEffect, useState } from "react";
import { getBooks } from "../api/apiCalls";
export default function useGoogleBooks(query) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setError(false);
        getBooks(query)
            .then((books) => {
                setBooks(books);
            })
            .catch((err) => {
                setError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [query]);
    
    return {books, error, isLoading}
}
