import { useEffect, useState } from "react";
import { getPublishersBooks } from "../api/apiCalls";
export default function usePublisherBooks(publisher, max) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        setIsLoading(true);
        setError(false);
        getPublishersBooks(publisher, max)
            .then((books) => {
                console.log(books)
                setBooks(books);
            })
            .catch((err) => {
                setError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [publisher, max]);
    
    return {books, error, isLoading}
}
