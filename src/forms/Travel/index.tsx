const initDialogRef = (ref: HTMLDialogElement) => {
  ref.showModal();
  return () => {
    ref.close();
  };
};

export const TravelForm = () => {
  const handleShowModal = () => {};

  return (
    <>
      <button onClick={handleShowModal}>Show</button>
      <dialog ref={initDialogRef}>
        <form>sample</form>
      </dialog>
    </>
  );
};
