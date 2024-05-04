const initRef = (ref: HTMLDialogElement | null) => {
  ref?.showModal();
  return () => {
    ref?.close();
  };
};

export const TravelForm = () => {
  const handleShowModal = () => {};

  return (
    <>
      <button onClick={handleShowModal}>Show</button>
      <dialog ref={initRef}>
        <form>sample</form>
      </dialog>
    </>
  );
};
