export const TravelForm = () => {
  const handleShowModal = () => {
    // ref.current?.showModal();
  };
  return (
    <>
      <button onClick={handleShowModal}>Show</button>
      <dialog
        ref={(ref) => {
          ref?.showModal();
          return () => {
            ref?.close();
          };
        }}
      >
        <form>sample</form>
      </dialog>
    </>
  );
};
