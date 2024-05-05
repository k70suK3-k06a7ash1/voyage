import { useActionState, useOptimistic, useRef } from "react";
import { UseOptimisticStateForm } from "../UseOptimisticState";

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
  const [title, setTitle] = useOptimistic<string, string>(
    "",
    (_currentState, optimisticValue) => optimisticValue
  );
  const [response, submitAction, isPending] = useActionState<
    string | null,
    FormData
  >(
    async (_, formData) => {
      const requestTitle = formData.get("title") as string;
      setTitle(requestTitle);
      await deliverTitle(requestTitle);
      return requestTitle + "done";
    },
    null,
    "/finished"
  );

  return (
    <>
      <dialog ref={initDialogRef}>
        <UseOptimisticStateForm />
        <form ref={formRef} action={submitAction}>
          label : {isPending ? title : response}
          <div />
          <input name="title" type="text" />
          <button type="submit">Submit</button>
          {isPending && <p>Submitting...</p>}
        </form>
      </dialog>
    </>
  );
};
