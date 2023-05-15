import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { getBooks } from "../api/apiCalls";
import Modal from "react-modal";
import useGoogleBooks from "../hooks/useGoogleBooks";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export default function BooksGrid({ query }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const booksData = useGoogleBooks(query)
    function closeModal() {
        setIsOpen(false);
    }
console.log(booksData)
    if (booksData.isLoading) return <p>Loading...</p>;
    if (booksData.error) return <p>Something went wrong...</p>;
    return (
        <main className="books__grid">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Publishers other books"
                ariaHideApp={false}
            >
                <div>
                    <h2>More books by this publisher</h2>
                    <ul>
                        <li>Book 1</li>
                        <li>Book 2</li>
                        <li>Book 3</li>
                    </ul>
                </div>
            </Modal>
            {booksData.books.map((book) => {
                console.log(book, 'this is book')
                return (
                    <BookCard
                        key={book.id}
                        title={book.volumeInfo.title}
                        imgUrl={book.volumeInfo}
                        setIsOpen={setIsOpen}
                    />
                );
            })}
        </main>
    );
}
