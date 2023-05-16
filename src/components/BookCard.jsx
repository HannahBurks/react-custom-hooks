export default function BookCard({ title, imgUrl, modal, setPublisher, publisher}) {
    const handleModal = () => {
        modal.setIsOpen(true);
        setPublisher(publisher)
    };
    return (
        <div onClick={handleModal}>
            <p>{title}</p>
            <img src={imgUrl.imageLinks.thumbnail} alt="book thumbnail" />
        </div>
    );
}
