export default function BookCard({ title, imgUrl, setIsOpen , setPublisher, publisher}) {
    const handleModal = () => {
        setIsOpen(true);
        setPublisher(publisher)
    };
    return (
        <div onClick={handleModal}>
            <p>{title}</p>
            <img src={imgUrl.imageLinks.thumbnail} alt="book thumbnail" />
        </div>
    );
}
