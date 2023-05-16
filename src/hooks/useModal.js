import {useState } from "react";

export default function useModal(bool) {
const [modalIsOpen, setIsOpen] = useState(bool);
function closeModal() {
    setIsOpen(false);
}
return {modalIsOpen, setIsOpen, closeModal}
}