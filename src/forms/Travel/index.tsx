import { useOptimistic, useRef, useState } from "react";

const initDialogRef = (ref: HTMLDialogElement) => {
  ref.showModal();
  return () => {
    ref.close();
  };
};

const deliverTitle = async (title: string) => {
  await new Promise((res) => setTimeout(res, 1000));
  return title;
};
export const TravelForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [title, setTitle] = useState("");
  const [optimisticTitle, addOptimisticTitle] = useOptimistic<string, string>(
    title,
    (_currentState, optimisticValue) => optimisticValue
  );

  const sendTitle = async (formData: FormData) => {
    const sentTitle = await deliverTitle(formData.get("title") as string);
    setTitle(() => sentTitle);
  };

  const formAction = async (formData: FormData) => {
    addOptimisticTitle(formData.get("title") as string);
    formRef.current?.reset();
    await sendTitle(formData);
  };

  return (
    <>
      <dialog ref={initDialogRef}>
        <form ref={formRef} action={formAction}>
          optimatic : {optimisticTitle}
          <div />
          label : {title}
          <div />
          <input name="title" type="text" />
          <button type="submit">Submit</button>
        </form>
      </dialog>
    </>
  );
};
