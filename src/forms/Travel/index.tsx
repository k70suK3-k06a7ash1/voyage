import { useRef } from "react";

export const TravelForm = () => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const handleShowModal = () => {
    ref.current?.showModal();
  };
  return (
    <>
      <button onClick={handleShowModal}>Show</button>
      <dialog ref={ref}>
        <form>sample</form>
      </dialog>
    </>
  );
};
