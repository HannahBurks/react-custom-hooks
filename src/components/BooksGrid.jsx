import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Modal from "react-modal";
import useGoogleBooks from "../hooks/useGoogleBooks";
import usePublisherBooks from "../hooks/usePublisherBooks";
import useModal from "../hooks/useModal";
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        color: 'black'
    },
};

export default function BooksGrid({query}) {
  
    const [max, setMax] = useState(10)
    const [publisher, setPublisher] = useState()
    const booksData = useGoogleBooks(query, max)
    const publisherData = usePublisherBooks(publisher, 3)
   const modal = useModal(false)
    function updateMax(event){
     setMax(+event.target.value)
     
    }

    if (booksData.isLoading) return <p>Loading...</p>;
    if (booksData.error) return <p>Something went wrong...</p>;

    return (
       
        <main className="books__grid">
             <label for="bookNumber">View</label>



<select name="bookAmount" id="bookAmount" onChange={updateMax}>
<option value="">--Please choose an option--</option>
  <option value="5">5</option>
  <option value="10">10</option>
  <option value="20">20</option>
</select>

            <Modal
                isOpen={modal.modalIsOpen}
                onRequestClose={modal.closeModal}
                style={customStyles}
                contentLabel="Publishers other books"
                ariaHideApp={false}
            >
                <div>
                    <h2 color="black">More books by this publisher</h2>
                    <ul>{publisherData.books.map((book) => {
                        console.log(book)
                return (
                    <li>
                        {book.volumeInfo.title}
                   </li>     
                )})}
                    </ul>
                </div>
            </Modal>
            {booksData.books.map((book) => {
               
                return (
                    <BookCard
                        key={book.id}
                        title={book.volumeInfo.title}
                        imgUrl={book.volumeInfo}
                        modal={modal}
                        setPublisher={setPublisher}
                        publisher={book.volumeInfo.publisher}
                    />
                );
            })}
        </main>
    );
}
